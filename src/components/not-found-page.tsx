import { Link } from "@tanstack/react-router";
import { ArrowLeft, Compass, Home, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const NotFoundPage = () => {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, oklch(0.68 0.14 278 / 0.2), transparent 38%), radial-gradient(circle at 85% 70%, oklch(0.8 0.17 72 / 0.2), transparent 42%), linear-gradient(to bottom, color-mix(in oklch, var(--chart-2) 12%, var(--background)) 0%, var(--background) 58%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklch, var(--border) 60%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklch, var(--border) 60%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "radial-gradient(circle at center, black 34%, rgba(0,0,0,0.45) 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 34%, rgba(0,0,0,0.45) 70%, transparent 100%)",
        }}
      />

      <section className="mx-auto flex min-h-screen max-w-5xl items-center px-4 py-16 md:px-6">
        <div className="relative w-full overflow-hidden rounded-4xl border border-border/80 bg-card/75 p-7 shadow-xl backdrop-blur-sm sm:p-10">
          <div
            className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full blur-3xl motion-reduce:blur-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.62 0.2 265 / 0.26), transparent 70%)",
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-16 size-64 rounded-full blur-3xl motion-reduce:blur-none"
            style={{
              background:
                "radial-gradient(circle, oklch(0.82 0.14 80 / 0.24), transparent 72%)",
            }}
            aria-hidden="true"
          />

          <div className="relative flex flex-col gap-7">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium tracking-wide text-muted-foreground">
              <Sparkles className="size-3.5 text-chart-2" aria-hidden="true" />
              Route Lost In Style
            </div>

            <div className="space-y-3">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-chart-2">
                Error 404
              </p>
              <h1 className="text-balance font-semibold text-4xl leading-tight tracking-tight text-foreground sm:text-5xl">
                This page ghosted your URL.
              </h1>
              <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
                The path you opened does not exist, moved, or never shipped.
                Let&apos;s get you back to familiar territory.
              </p>
            </div>

            <div className="grid gap-4 rounded-2xl border border-border/80 bg-background/70 p-4 sm:grid-cols-2 sm:p-5">
              <div className="flex gap-3">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-chart-2">
                  <Home className="size-4.5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">
                    Back to home
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Start over from the landing page.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="inline-flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-chart-1">
                  <Compass className="size-4.5" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="text-sm font-semibold text-foreground">
                    Browse docs
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Jump into component guides and references.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "inline-flex justify-center gap-2",
                )}
              >
                <Home className="size-4" aria-hidden="true" />
                Take me home
              </Link>
              <Link
                to="/docs/$"
                params={{ _splat: "/introduction" }}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "inline-flex justify-center gap-2",
                )}
              >
                <Compass className="size-4" aria-hidden="true" />
                Open docs
              </Link>
              <button
                type="button"
                onClick={() => window.history.back()}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "inline-flex justify-center gap-2",
                )}
              >
                <ArrowLeft className="size-4" aria-hidden="true" />
                Go back
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export const DocsNotFoundPage = () => {
  return (
    <section className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-xs sm:p-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Docs 404
        </p>
        <h1 className="mt-2 text-balance text-2xl font-semibold tracking-tight sm:text-3xl">
          This documentation page does not exist
        </h1>
        <p className="mt-3 max-w-prose text-muted-foreground">
          The link might be outdated, moved, or misspelled. You can continue
          from the docs index or return to the home page.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/docs/$"
            params={{ _splat: "/introduction" }}
            className={buttonVariants({ size: "default" })}
          >
            Go to docs intro
          </Link>
          <Link
            to="/docs/$"
            params={{ _splat: "/components" }}
            className={buttonVariants({ variant: "outline", size: "default" })}
          >
            Browse components
          </Link>
        </div>
      </div>
    </section>
  );
};
