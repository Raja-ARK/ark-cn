import { cn } from "@/lib/utils";

type LoadingBlockProps = {
  className?: string;
};

const LoadingBlock = ({ className }: LoadingBlockProps) => {
  return (
    <div
      aria-hidden="true"
      className={cn("skeleton-shimmer rounded-md", className)}
    />
  );
};

export const LoadingPage = () => {
  return (
    <section
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading content"
      className="w-full"
    >
      <article className="mx-auto flex h-full w-full max-w-220 flex-col gap-6 px-4 py-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1 space-y-3">
            <LoadingBlock className="h-10 w-52 max-w-full" />
            <LoadingBlock className="h-5 w-full max-w-xl" />
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <LoadingBlock className="h-9 w-20 rounded-lg" />
            <LoadingBlock className="size-9 rounded-lg" />
            <LoadingBlock className="size-9 rounded-lg" />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <LoadingBlock className="h-56 w-full rounded-xl" />
          <div className="space-y-4">
            <LoadingBlock className="h-5 w-40" />
            <LoadingBlock className="h-4 w-full" />
            <LoadingBlock className="h-4 w-[94%]" />
            <LoadingBlock className="h-4 w-[88%]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <LoadingBlock className="h-36 w-full rounded-xl" />
            <LoadingBlock className="h-36 w-full rounded-xl" />
          </div>
        </div>

        <div className="grid w-full gap-4 lg:grid-cols-2">
          <LoadingBlock className="h-24 w-full rounded-lg" />
          <LoadingBlock className="h-24 w-full rounded-lg" />
        </div>
      </article>
    </section>
  );
};

export const DocsLayoutPage = () => {
  return (
    <section
      aria-busy="true"
      aria-live="polite"
      aria-label="Loading documentation content"
      className="w-full"
    >
      <article className="mx-auto flex h-full w-full max-w-220 flex-col gap-6 px-4 py-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="min-w-0 flex-1 space-y-3">
            <LoadingBlock className="h-10 w-52 max-w-full" />
            <LoadingBlock className="h-5 w-full max-w-xl" />
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <LoadingBlock className="h-9 w-20 rounded-lg" />
            <LoadingBlock className="size-9 rounded-lg" />
            <LoadingBlock className="size-9 rounded-lg" />
          </div>
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <LoadingBlock className="h-56 w-full rounded-xl" />
          <div className="space-y-4">
            <LoadingBlock className="h-5 w-40" />
            <LoadingBlock className="h-4 w-full" />
            <LoadingBlock className="h-4 w-[94%]" />
            <LoadingBlock className="h-4 w-[88%]" />
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <LoadingBlock className="h-36 w-full rounded-xl" />
            <LoadingBlock className="h-36 w-full rounded-xl" />
          </div>
        </div>

        <div className="grid w-full gap-4 lg:grid-cols-2">
          <LoadingBlock className="h-24 w-full rounded-lg" />
          <LoadingBlock className="h-24 w-full rounded-lg" />
        </div>
      </article>
    </section>
  );
};
