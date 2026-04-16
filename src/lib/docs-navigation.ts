import { allDocs } from "content-collections";

export type SiteDoc = (typeof allDocs)[number];

type DocsGroup = {
  key: string;
  title: string;
  items: SiteDoc[];
};

const ROOT_DOC_ORDER = [
  "/",
  "/installation",
  "/components",
  "/roadmap",
] as const;

const DOC_GROUP_ORDER = [
  ".",
  "components/forms",
  "components/overlays",
  "components/navigation",
  "components/feedback",
  "components/actions",
  "components/display",
] as const;

const DOC_GROUP_TITLES: Record<string, string> = {
  ".": "Overview",
  "components/forms": "Forms",
  "components/overlays": "Overlays",
  "components/navigation": "Navigation",
  "components/feedback": "Feedback",
  "components/actions": "Actions",
  "components/display": "Display",
};

const toTitleCase = (value: string) => {
  return value.replace(/\b\w/g, (char) => char.toUpperCase());
};

const normalizeDocDirectory = (directory: string) => {
  return directory.replace(/\\/g, "/");
};

const getGroupRank = (directory: string) => {
  const normalizedDirectory = normalizeDocDirectory(directory);
  const index = DOC_GROUP_ORDER.indexOf(
    normalizedDirectory as (typeof DOC_GROUP_ORDER)[number],
  );

  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};

const getRootDocRank = (url: string) => {
  const index = ROOT_DOC_ORDER.indexOf(url as (typeof ROOT_DOC_ORDER)[number]);

  return index === -1 ? Number.MAX_SAFE_INTEGER : index;
};

export const getDocsGroupTitle = (directory: string) => {
  const normalizedDirectory = normalizeDocDirectory(directory);
  const configuredTitle = DOC_GROUP_TITLES[normalizedDirectory];

  if (configuredTitle) {
    return configuredTitle;
  }

  if (normalizedDirectory === ".") {
    return "Overview";
  }

  const fallback = normalizedDirectory.split("/").at(-1) ?? normalizedDirectory;
  return toTitleCase(fallback.replace(/-/g, " "));
};

export const compareDocs = (left: SiteDoc, right: SiteDoc) => {
  const leftDirectory = normalizeDocDirectory(left._meta.directory);
  const rightDirectory = normalizeDocDirectory(right._meta.directory);
  const groupRankDiff =
    getGroupRank(leftDirectory) - getGroupRank(rightDirectory);

  if (groupRankDiff !== 0) {
    return groupRankDiff;
  }

  if (leftDirectory !== rightDirectory) {
    return getDocsGroupTitle(leftDirectory).localeCompare(
      getDocsGroupTitle(rightDirectory),
    );
  }

  if (leftDirectory === ".") {
    const rootRankDiff = getRootDocRank(left.url) - getRootDocRank(right.url);

    if (rootRankDiff !== 0) {
      return rootRankDiff;
    }
  }

  return left.title.localeCompare(right.title);
};

export const getOrderedDocs = (docs: ReadonlyArray<SiteDoc> = allDocs) => {
  return [...docs].sort(compareDocs);
};

export const getDocsGroups = (docs: ReadonlyArray<SiteDoc> = allDocs) => {
  return getOrderedDocs(docs).reduce<DocsGroup[]>((groups, doc) => {
    const currentGroup = groups.at(-1);
    const key = normalizeDocDirectory(doc._meta.directory);

    if (!currentGroup || currentGroup.key !== key) {
      groups.push({
        key,
        title: getDocsGroupTitle(key),
        items: [doc],
      });
      return groups;
    }

    currentGroup.items.push(doc);
    return groups;
  }, []);
};

export const getComponentDocGroups = (
  docs: ReadonlyArray<SiteDoc> = allDocs,
) => {
  return getDocsGroups(docs).filter((group) =>
    group.items.some((doc) => doc.url.startsWith("/components/")),
  );
};
