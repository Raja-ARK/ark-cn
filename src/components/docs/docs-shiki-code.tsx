import { useEffect, useState } from "react";
import { codeToHtml } from "shiki/bundle/web";
import { DOCS_CODE_THEMES } from "@/lib/docs-code-theme";
import { cn } from "@/lib/utils";

export type DocsShikiCodeThemes = {
  light: string;
  dark: string;
};

export type DocsShikiCodeProps = {
  source: string;
  lang?: string;
  className?: string;
  /** Override bundled Shiki theme ids (defaults to docs page themes). */
  themes?: DocsShikiCodeThemes;
};

export const DocsShikiCode = ({
  source,
  lang = "tsx",
  className,
  themes = DOCS_CODE_THEMES,
}: DocsShikiCodeProps) => {
  const [html, setHtml] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    void codeToHtml(source, {
      lang,
      themes: {
        light: themes.light,
        dark: themes.dark,
      },
    }).then((out) => {
      if (!cancelled) {
        setHtml(out);
      }
    });
    return () => {
      cancelled = true;
    };
  }, [source, lang, themes.dark, themes.light]);

  return (
    <div
      className={cn(
        "docs-shiki-code font-mono text-[13px] leading-relaxed",
        "[&_pre.shiki]:m-0! [&_pre.shiki]:bg-transparent! [&_pre.shiki]:p-0! [&_pre.shiki]:text-[13px] [&_pre.shiki]:border-none!",
        "[&_code]:font-mono",
        className,
      )}
    >
      {html ? (
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      ) : (
        <pre className="m-0 whitespace-pre-wrap wrap-break-word p-0 text-muted-foreground">
          <code>{source}</code>
        </pre>
      )}
    </div>
  );
};
