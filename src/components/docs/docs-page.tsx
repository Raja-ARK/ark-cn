import { MDXContent } from "@content-collections/mdx/react";
import { Link, useLocation } from "@tanstack/react-router";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import ComponentPreview from "@/components/component-preview";
import ComponentSource from "@/components/component-source";
import { ComponentDocSupplement } from "@/components/docs/component-doc-supplement";
import { ComponentsNavigation } from "@/components/docs/components-navigation";
import { DocStep, DocSteps } from "@/components/docs/doc-install-steps";
import { DataAttributesTable } from "@/components/docs/docs-data-attributes-table";
import { KeyboardShortcutsTable } from "@/components/docs/docs-keyboard-shortcuts-table";
import { DocPropsTable } from "@/components/docs/docs-props-table";
import PackageInstall from "@/components/package-install";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type DocsHeading, getDocURl } from "@/lib/docs";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import type { DocSection } from "@/routes/_docsLayout/docs/$";
import { buttonVariants } from "../ui/button";
import { DocCopyPage } from "./doc-copy-page";
import { useDoc } from "./doc-provider";

type DocsPageProps = {
  title: string;
  description: string;
  mdx: string;
  rawContent: string;
  headings: DocsHeading[];
  nextPage: DocSection | null;
  previousPage: DocSection | null;
  referenceLink: string | null;
};

const DocsPage = ({
  title,
  description,
  mdx,
  rawContent,
  headings,
  nextPage,
  previousPage,
  referenceLink,
}: DocsPageProps) => {
  const { setHeadings } = useDoc();
  const location = useLocation();
  const staticPageUrl = `${siteConfig.url.replace(/\/$/, "")}${location.pathname}${location.searchStr}`;
  const [clientPageUrl, setClientPageUrl] = useState<string | null>(null);
  useEffect(() => {
    setClientPageUrl(window.location.href);
  }, [location.pathname, location.searchStr]);
  const pageUrl = clientPageUrl ?? staticPageUrl;

  useEffect(() => {
    setHeadings(headings);
    return () => {
      setHeadings([]);
    };
  }, [headings]);
  return (
    <article className="w-full max-w-220 mx-auto flex flex-col gap-6 px-4 py-6 h-full">
      <div>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <h1 className="min-w-0 flex-1 text-3xl font-semibold tracking-tight sm:text-3xl">
            {title}
          </h1>
          <div className="shrink-0 items-center gap-2 hidden md:flex">
            {referenceLink && (
              <a
                href={referenceLink}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "secondary",
                })}
              >
                API <ArrowRightIcon className="w-4 h-4" />
                <span className="sr-only">Reference</span>
              </a>
            )}
            <DocCopyPage page={rawContent} url={pageUrl} />
            {previousPage || nextPage ? (
              <>
                {previousPage && getDocURl(previousPage.url) && (
                  <Link
                    to={getDocURl(previousPage.url)}
                    params={{ _splat: getDocURl(previousPage.url) }}
                    className={buttonVariants({
                      variant: "secondary",
                      size: "icon",
                    })}
                  >
                    <ArrowLeftIcon className="w-4 h-4" />
                    <span className="sr-only">Previous</span>
                  </Link>
                )}
                {nextPage && getDocURl(nextPage.url) && (
                  <Link
                    to={getDocURl(nextPage.url)}
                    params={{ _splat: getDocURl(nextPage.url) }}
                    className={buttonVariants({
                      variant: "secondary",
                      size: "icon",
                    })}
                  >
                    <ArrowRightIcon className="w-4 h-4" />
                    <span className="sr-only">Next</span>
                  </Link>
                )}
              </>
            ) : null}
          </div>
        </div>
        <p className="text-[1.05rem] text-muted-foreground sm:text-base sm:text-balance md:max-w-[80%]">
          {description}
        </p>
      </div>
      <div className="docs-mdx-prose prose dark:prose-invert flex-1 max-w-none prose-pre:bg-transparent prose-pre:p-0 prose-pre:my-0">
        <MDXContent
          code={mdx}
          components={{
            ComponentPreview,
            ComponentSource,
            PackageInstall,
            Tabs,
            TabsContent,
            TabsList,
            TabsTrigger,
            DocSteps,
            DocStep,
            Steps: DocSteps,
            Step: DocStep,
            KeyboardShortcutsTable,
            DataAttributesTable,
            DocPropsTable,
            ComponentsNavigation,
            ComponentDocSupplement,
          }}
        />
      </div>
      {nextPage || previousPage ? (
        <div
          className={cn(
            "grid gap-4 w-full",
            nextPage && previousPage
              ? "grid-cols-1 lg:grid-cols-2"
              : "grid-cols-1",
          )}
        >
          {previousPage && (
            <Link
              to={getDocURl(previousPage.url)}
              params={{ _splat: getDocURl(previousPage.url) }}
              className={
                "flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-accent/80 hover:text-accent-foreground w-full"
              }
            >
              <div className="inline-flex items-center gap-1.5 font-medium">
                <ArrowLeftIcon className="w-4 h-4" />
                <p className="text-base font-semibold tracking-tight sm:text-base">
                  {previousPage?.title}
                </p>
              </div>
              <p className="text-muted-foreground truncate">
                {previousPage?.description}
              </p>
            </Link>
          )}
          {nextPage && (
            <Link
              to={getDocURl(nextPage.url)}
              params={{ _splat: getDocURl(nextPage.url) }}
              className={
                "flex flex-col gap-2 rounded-lg border p-4 text-sm transition-colors hover:bg-accent/80 hover:text-accent-foreground w-full"
              }
            >
              <div className="inline-flex items-center gap-1.5 font-medium justify-end">
                <p className="text-base font-semibold tracking-tight sm:text-base">
                  {nextPage?.title}
                </p>
                <ArrowRightIcon className="w-4 h-4" />
              </div>
              <p className="text-muted-foreground truncate text-end">
                {nextPage?.description}
              </p>
            </Link>
          )}
        </div>
      ) : null}
    </article>
  );
};

export default DocsPage;
