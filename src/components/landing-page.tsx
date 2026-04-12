import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Box,
  Layers,
  LayoutGrid,
  Sparkles,
} from "lucide-react";
import type { ComponentProps } from "react";
// import mailHero from "@/assets/mail2.webp";
import { LandingBentoDemos } from "@/components/landing-bento-demos";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import Header from "./header";

const LandingLink = ({
  className,
  href,
  children,
  ...props
}: ComponentProps<typeof Link>) => {
  return (
    <Link
      to={href}
      className={cn(
        "touch-manipulation focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
};

const pillars = [
  {
    title: "Accessible by default",
    description:
      "Keyboard routes, focus, and ARIA come wired in. You decide hierarchy, rhythm, and how loud the interface should feel.",
    icon: Sparkles,
  },
  {
    title: "Primitives in-repo",
    description:
      "The shadcn way: copy, adapt, and own the source. No mystery package standing between you and a hotfix.",
    icon: Box,
  },
  {
    title: "Docs that ship",
    description:
      "Guides and references live beside the UI they describe—fewer mismatches between what you read and what you ship.",
    icon: BookOpen,
  },
] as const;

export const LandingPage = () => {
  return (
    <main
      id="main-content"
      tabIndex={-1}
      className="outline-none [--header-height:calc(--spacing(14))]"
    >
      <Header className="fixed left-0 right-0 top-0" />
      <div className="min-w-0 pb-24 md:pb-32">
        <section
          className="relative isolate overflow-hidden bg-background [--grid-line:oklch(0_0_0/0.08)] dark:[--grid-line:oklch(1_0_0/0.08)]"
          aria-labelledby="landing-hero-heading"
        >
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            aria-hidden="true"
            style={{
              background: `linear-gradient(
              to bottom,
              color-mix(in oklch, var(--chart-2) 14%, transparent) 0%,
              transparent 46%,
              color-mix(in oklch, var(--chart-1) 12%, transparent) 58%,
              color-mix(in oklch, var(--chart-1) 5%, var(--background)) 78%,
              var(--background) 92%,
              var(--background) 100%
            )`,
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-80 dark:opacity-45"
            aria-hidden="true"
            style={{
              maskImage:
                "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.5) 86%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, black 72%, rgba(0,0,0,0.5) 86%, transparent 100%)",
            }}
          >
            <div
              className="absolute left-1/2 top-0 h-[min(400px,58vw)] w-[min(920px,130vw)] -translate-x-1/2 rounded-full blur-3xl motion-reduce:blur-none"
              style={{
                background:
                  "radial-gradient(ellipse 90% 85% at 50% 0%, oklch(0.68 0.14 278 / 0.14) 0%, oklch(0.58 0.18 264 / 0.06) 42%, transparent 68%)",
              }}
            />
            <div
              className="absolute -left-1/4 top-0 h-[min(560px,82vw)] w-[min(760px,92vw)] rounded-full blur-3xl motion-reduce:blur-none"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 40% 26%, oklch(0.72 0.11 285 / 0.22) 0%, oklch(0.58 0.21 264 / 0.18) 36%, oklch(0.52 0.14 252 / 0.09) 56%, transparent 74%)",
              }}
            />
            <div
              className="absolute -right-1/4 bottom-0 h-[min(520px,78vw)] w-[min(680px,88vw)] rounded-full blur-3xl motion-reduce:blur-none"
              style={{
                background:
                  "radial-gradient(ellipse 100% 100% at 58% 74%, oklch(0.92 0.12 88 / 0.14) 0%, oklch(0.8 0.17 72 / 0.2) 34%, oklch(0.72 0.12 55 / 0.1) 54%, transparent 72%)",
              }}
            />
          </div>

          <div
            className="pointer-events-none absolute inset-0 -z-10 motion-reduce:hidden"
            aria-hidden="true"
            style={{
              maskImage:
                "linear-gradient(to bottom, #000 0%, #000 32%, rgba(0,0,0,0.4) 52%, rgba(0,0,0,0.12) 74%, rgba(0,0,0,0.03) 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, #000 0%, #000 32%, rgba(0,0,0,0.4) 52%, rgba(0,0,0,0.12) 74%, rgba(0,0,0,0.03) 88%, transparent 100%)",
            }}
          >
            <div
              className="h-full w-full"
              style={{
                backgroundImage: `
              linear-gradient(to right, var(--grid-line) 1px, transparent 1px),
              linear-gradient(to bottom, var(--grid-line) 1px, transparent 1px)
            `,
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 0 0",
                maskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 100% 95% at 0% 0%, #000 0%, #000 20%, rgba(0,0,0,0.5) 44%, rgba(0,0,0,0.1) 68%, transparent 88%)
            `,
                WebkitMaskImage: `
              repeating-linear-gradient(
                to right,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              repeating-linear-gradient(
                to bottom,
                black 0px,
                black 3px,
                transparent 3px,
                transparent 8px
              ),
              radial-gradient(ellipse 100% 95% at 0% 0%, #000 0%, #000 20%, rgba(0,0,0,0.5) 44%, rgba(0,0,0,0.1) 68%, transparent 88%)
            `,
                maskComposite: "intersect",
                WebkitMaskComposite: "source-in",
              }}
            />
          </div>

          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-16 md:gap-12 md:px-6 md:py-24 lg:py-28">
            <p className="max-w-prose font-mono text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span translate="no">{siteConfig.name}</span>
            </p>

            <div className="grid gap-8  lg:gap-12">
              <div className="min-w-0 space-y-6">
                <h1
                  id="landing-hero-heading"
                  className="text-balance font-semibold text-4xl leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl"
                >
                  Interfaces built on{" "}
                  <span className="font-serif font-normal italic text-chart-2">
                    craft
                  </span>
                  , styled like you mean it.
                </h1>
                <p className="max-w-prose text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
                  Copy-paste friendly building blocks, tokens you control, and
                  documentation that stays honest with the product—so polished
                  screens ship without fighting the kit.
                </p>
              </div>

              {/* <aside className="min-w-0 lg:justify-self-end">
                <figure className="relative overflow-hidden rounded-xl border border-border/80 bg-muted/30 shadow-lg ring-1 ring-border/30 dark:bg-muted/20">
                  <img
                    src={mailHero}
                    alt="ARK CN interface preview with mail and dashboard surfaces"
                    width={960}
                    height={720}
                    className="aspect-video h-auto w-full object-cover object-center"
                    decoding="async"
                    fetchPriority="high"
                  />
                  <figcaption className="sr-only">
                    Marketing preview highlighting mail and workspace chrome for{" "}
                    <span translate="no">{siteConfig.name}</span>
                  </figcaption>
                </figure>
              </aside> */}
            </div>

            <div className="flex min-w-0 flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
              <LandingLink
                href="/docs/installation"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "inline-flex w-full min-w-0 justify-center gap-2 sm:w-auto",
                )}
              >
                <BookOpen className="shrink-0" aria-hidden="true" />
                Read the docs
                <ArrowRight
                  className="shrink-0 opacity-80"
                  aria-hidden="true"
                />
              </LandingLink>
              <LandingLink
                href="/docs/components"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "inline-flex w-full min-w-0 justify-center gap-2 sm:w-auto",
                )}
              >
                <Layers className="shrink-0" aria-hidden="true" />
                Component reference
              </LandingLink>
            </div>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20"
          aria-labelledby="landing-bento-heading"
        >
          <div className="flex max-w-2xl flex-col gap-3">
            <h2
              id="landing-bento-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Live surfaces in one bento
            </h2>
            <p className="text-pretty text-muted-foreground">
              One grid of minimal, working samples—checkout patterns,
              navigation, inputs, motion, and feedback—so you can try the kit
              without loading the full showcase pages.
            </p>
          </div>
          <div className="mt-10">
            <LandingBentoDemos />
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20"
          aria-labelledby="landing-pillars-heading"
        >
          <div className="flex max-w-2xl flex-col gap-3">
            <h2
              id="landing-pillars-heading"
              className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Why <span translate="no">{siteConfig.name}</span>
            </h2>
            <p className="text-pretty text-muted-foreground">
              Three commitments that keep UI work legible for your team and
              clear for users.
            </p>
          </div>

          <ul className="mt-10 grid gap-5 md:grid-cols-3">
            {pillars.map(({ title, description, icon: Icon }) => (
              <li key={title}>
                <article className="group relative flex h-full min-w-0 flex-col rounded-2xl border border-border bg-card p-6 shadow-xs transition-[box-shadow,transform,border-color] duration-200 ease-out motion-reduce:transition-none hover:-translate-y-0.5 hover:border-border hover:shadow-md motion-reduce:hover:transform-none">
                  <div
                    className="mb-4 inline-flex size-11 items-center justify-center rounded-xl border border-border bg-muted/50 text-foreground transition-colors duration-200 group-hover:border-chart-2/40 group-hover:text-chart-2"
                    aria-hidden="true"
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 min-w-0 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="border-y border-border/80 bg-muted/30 py-16 dark:bg-muted/15 md:py-20"
          aria-labelledby="landing-workflow-heading"
        >
          <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] md:items-center md:gap-14 md:px-6">
            <div className="min-w-0 space-y-4">
              <h2
                id="landing-workflow-heading"
                className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              >
                From kit to screen, without losing the plot
              </h2>
              <p className="text-pretty text-muted-foreground">
                Keep shared components calm and reusable. Push expressive
                layout, illustration, and motion to the pages where the story
                lives.
              </p>
              <LandingLink
                href="/docs/introduction"
                className={cn(
                  buttonVariants({ variant: "secondary", size: "default" }),
                  "mt-2 inline-flex w-fit gap-2",
                )}
              >
                <LayoutGrid className="size-4" aria-hidden="true" />
                See how the kit is organized
              </LandingLink>
            </div>
            <figure className="min-w-0">
              <blockquote className="border-l-4 border-chart-2 pl-6 font-serif text-xl italic leading-snug text-foreground sm:text-2xl">
                {
                  "\u201cShip the behavior layer once. Iterate on the surface until it feels inevitable.\u201d"
                }
              </blockquote>
              <figcaption className="mt-4 pl-6 font-mono text-xs text-muted-foreground">
                Working agreement for{" "}
                <span translate="no">{siteConfig.name}</span> UI work
              </figcaption>
            </figure>
          </div>
        </section>

        <section
          className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20"
          aria-labelledby="landing-cta-heading"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-card via-card to-muted/40 p-8 shadow-sm dark:to-muted/20 md:p-10">
            <div
              className="pointer-events-none absolute -right-16 -top-16 size-56 rounded-full blur-2xl motion-reduce:blur-none"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.55 0.22 264 / 0.2), transparent 65%)",
              }}
              aria-hidden="true"
            />
            <div className="relative flex min-w-0 flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="min-w-0 space-y-2">
                <h2
                  id="landing-cta-heading"
                  className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl"
                >
                  Ready when you are
                </h2>
                <p className="max-w-prose text-pretty text-sm text-muted-foreground sm:text-base">
                  Start with installation, then thread components into your own
                  pages and flows.
                </p>
              </div>
              <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
                <LandingLink
                  href="/docs/installation"
                  className={cn(
                    buttonVariants({ size: "lg" }),
                    "inline-flex justify-center gap-2",
                  )}
                >
                  Get started
                  <ArrowRight className="size-4" aria-hidden="true" />
                </LandingLink>
                <LandingLink
                  href="/blocks"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "inline-flex justify-center",
                  )}
                >
                  Explore blocks
                </LandingLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
