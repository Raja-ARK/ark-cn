import { createFileRoute, notFound } from "@tanstack/react-router";
import { allDocs } from "content-collections";
import DocsPage from "@/components/docs/docs-page";
import { getOrderedDocs } from "@/lib/docs-navigation";

export type DocSection = (typeof allDocs)[number];

const RouteComponent = () => {
  const { section, nextPage, previousPage } = Route.useLoaderData();
  return (
    <DocsPage
      title={section.title}
      description={section.description}
      mdx={section.mdx}
      rawContent={section.content}
      headings={section.headings}
      nextPage={nextPage}
      previousPage={previousPage}
      referenceLink={section.referenceLink ?? null}
    />
  );
};

export const Route = createFileRoute("/_docsLayout/docs/$")({
  component: RouteComponent,
  loader: async ({ params }) => {
    const path = "/" + params._splat;

    const section = allDocs.find((doc) => doc.url === path);

    if (!section) {
      throw notFound();
    }

    const ordered = getOrderedDocs();
    const index = ordered.findIndex((doc) => doc.url === path);

    const previousPage = index > 0 ? ordered[index - 1]! : null;
    const nextPage =
      index >= 0 && index < ordered.length - 1 ? ordered[index + 1]! : null;

    return { section, nextPage, previousPage };
  },
});
