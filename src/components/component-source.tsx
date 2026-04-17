import { useMemo, useState } from "react";
import { DocsShikiCode } from "@/components/docs/docs-shiki-code";
import { buttonVariants } from "@/components/ui/button";
import {
  ClipboardIndicator,
  ClipboardRoot,
  ClipboardTrigger,
} from "@/components/ui/clipboard";
import { resolveUiSource } from "@/lib/component-ui-modules";
import { COMPONENT_SOURCE_SHIKI_THEMES } from "@/lib/docs-code-theme";
import { cn } from "@/lib/utils";

const COLLAPSED_MAX_PX = 280;

const shikiLangFromFileExt = (ext: string) => {
  switch (ext) {
    case "tsx":
      return "tsx";
    case "ts":
      return "typescript";
    case "jsx":
      return "jsx";
    case "js":
    case "mjs":
    case "cjs":
      return "javascript";
    case "css":
      return "css";
    case "json":
      return "json";
    case "md":
      return "markdown";
    case "mdx":
      return "mdx";
    default:
      return "tsx";
  }
};

const sourceBadgeFromExt = (ext: string) => {
  const map: Record<string, string> = {
    tsx: "TSX",
    ts: "TS",
    jsx: "JSX",
    js: "JS",
    mjs: "MJS",
    cjs: "CJS",
    css: "CSS",
    json: "JSON",
    md: "MD",
    mdx: "MDX",
  };
  return map[ext] ?? ext.toUpperCase().slice(0, 6);
};

export type ComponentSourceProps = {
  /** Basename of `src/components/ui/<name>.tsx` (no extension), e.g. `"accordion"`. */
  name: string;
  /** Path label in the header (e.g. `components/ui/accordion.tsx`). */
  title?: string;
  className?: string;
};

const ComponentSource = ({ name, title, className }: ComponentSourceProps) => {
  const [expanded, setExpanded] = useState(false);
  const resolved = useMemo(() => resolveUiSource(name), [name]);
  const displayTitle =
    title ?? `components/ui/${resolved?.basename ?? name}.tsx`;

  if (!resolved) {
    return (
      <div
        className={cn(
          "rounded-xl border border-dashed border-border px-4 py-6 text-center text-muted-foreground text-sm",
          className,
        )}
      >
        No UI source for{" "}
        <span className="font-mono text-foreground">{name}</span>. Expected{" "}
        <span className="font-mono text-foreground">
          src/components/ui/{name}.tsx
        </span>
        .
      </div>
    );
  }

  const { raw, ext } = resolved;
  const highlightLang = shikiLangFromFileExt(ext);
  const badgeLabel = sourceBadgeFromExt(ext);
  const toggleExpand = () => {
    setExpanded((v) => !v);
  };

  return (
    <figure
      className={cn(
        "not-prose my-8 w-full overflow-hidden rounded-xl border border-border bg-card text-card-foreground shadow-sm",
        className,
      )}
      data-slot="component-source"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-3 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span
            className="shrink-0 rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wide text-primary"
            title={highlightLang}
          >
            {badgeLabel}
          </span>
          <span className="truncate font-mono text-[12px] text-muted-foreground">
            {displayTitle}
          </span>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            className={buttonVariants({
              variant: "ghost",
              size: "sm",
              className: "h-8 px-2 text-xs font-medium text-muted-foreground",
            })}
            onClick={toggleExpand}
          >
            {expanded ? "Collapse" : "Expand"}
          </button>
          <span className="h-4 w-px bg-border" aria-hidden />
          <ClipboardRoot value={raw}>
            <ClipboardTrigger
              className={buttonVariants({
                variant: "ghost",
                size: "icon",
                className: "size-8 text-muted-foreground",
              })}
              aria-label="Copy code"
            >
              <ClipboardIndicator />
            </ClipboardTrigger>
          </ClipboardRoot>
        </div>
      </div>
      <div className="relative bg-muted">
        <div
          className={cn(
            "overflow-x-auto px-3 py-3 transition-[max-height] duration-200",
            expanded
              ? "max-h-[min(70vh,1200px)] overflow-y-auto"
              : "overflow-y-hidden",
          )}
          style={expanded ? undefined : { maxHeight: COLLAPSED_MAX_PX }}
        >
          <div className="flex gap-3 ">
            <DocsShikiCode
              source={raw}
              lang={highlightLang}
              themes={COMPONENT_SOURCE_SHIKI_THEMES}
              className="component-preview-code min-h-0"
            />
          </div>
        </div>
        {!expanded ? (
          <>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-card via-card/80 to-transparent" />
            <div className="absolute inset-x-0 bottom-2 flex justify-center">
              <button
                type="button"
                className={buttonVariants({
                  variant: "secondary",
                  size: "sm",
                  className: "text-xs shadow-sm",
                })}
                onClick={toggleExpand}
              >
                Expand
              </button>
            </div>
          </>
        ) : null}
      </div>
    </figure>
  );
};

export default ComponentSource;
