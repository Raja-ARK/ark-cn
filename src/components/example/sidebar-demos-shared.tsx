import { ChevronRightIcon } from "lucide-react";
import type { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";
import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

/** Matches `DemoFrame` default height — use with `previewClassName` on docs previews. */
export const SIDEBAR_DEMO_FRAME_HEIGHT_PX = 520;

/**
 * Override the sidebar's `position: fixed` / `h-svh` / `min-h-svh` so the
 * sidebar positions and sizes relative to this frame instead of the viewport.
 */
export const DemoFrame = ({
  children,
  className,
  height = SIDEBAR_DEMO_FRAME_HEIGHT_PX,
}: {
  children: ReactNode;
  className?: string;
  height?: number;
}) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-xl border border-border bg-background dark:[--sidebar:oklch(0.18_0_0)]",
      "**:data-[slot=sidebar-wrapper]:min-h-full",
      "**:data-[slot=sidebar-container]:absolute **:data-[slot=sidebar-container]:h-full",
      className,
    )}
    style={{ height, width: "100%" }}
  >
    {children}
  </div>
);

export const DemoPlaceholder = () => (
  <div className="flex flex-col gap-4 p-4 pb-8">
    <div className="grid auto-rows-min gap-4 md:grid-cols-3">
      <div className="aspect-video rounded-xl bg-muted/60 dark:bg-muted/40" />
      <div className="aspect-video rounded-xl bg-muted/60 dark:bg-muted/40" />
      <div className="aspect-video rounded-xl bg-muted/60 dark:bg-muted/40" />
    </div>
    {Array.from({ length: 10 }).map((_, i) => (
      <div
        key={`demo-row-${i.toString()}`}
        className="h-20 shrink-0 rounded-xl bg-muted/60 dark:bg-muted/40"
      />
    ))}
  </div>
);

export const DemoInsetShell = ({
  header,
  children,
  bodyClassName,
  className,
}: {
  header: ReactNode;
  children?: ReactNode;
  bodyClassName?: string;
  /** Merged onto `SidebarInset` (e.g. drop `border-l` for `variant="inset"`). */
  className?: string;
}) => (
  <SidebarInset
    className={cn(
      "min-h-0 min-w-0 flex-1 overflow-hidden border-border border-l bg-background",
      className,
    )}
  >
    {header}
    <div
      className={cn(
        "min-h-0 min-w-0 flex-1 overflow-x-hidden overflow-y-auto overscroll-y-contain",
        bodyClassName,
      )}
    >
      {children ?? <DemoPlaceholder />}
    </div>
  </SidebarInset>
);

export const DemoHeader = ({
  breadcrumb = "Data Fetching",
}: {
  breadcrumb?: string;
}) => (
  <header className="flex h-14 shrink-0 items-center gap-2 border-border border-b bg-background px-4">
    <SidebarTrigger className="-ml-1" />
    <Separator orientation="vertical" className="mr-2 h-4 self-center" />
    <div className="flex items-center gap-1.5 text-sm">
      <span className="hidden text-muted-foreground md:inline">
        Build Your Application
      </span>
      <ChevronRightIcon className="hidden size-3.5 text-muted-foreground md:inline" />
      <span className="font-medium">{breadcrumb}</span>
    </div>
  </header>
);

/** Header when the sidebar is on the right (see shadcn sidebar-14). */
export const DemoHeaderRight = ({
  breadcrumb = "Data Fetching",
}: {
  breadcrumb?: string;
}) => (
  <header className="flex h-14 shrink-0 items-center gap-2 border-border border-b bg-background px-4">
    <div className="flex min-w-0 flex-1 items-center gap-1.5 text-sm">
      <span className="hidden text-muted-foreground md:inline">
        Build Your Application
      </span>
      <ChevronRightIcon className="hidden size-3.5 shrink-0 text-muted-foreground md:inline" />
      <span className="truncate font-medium">{breadcrumb}</span>
    </div>
    <SidebarTrigger className="-mr-1 shrink-0 rotate-180" />
  </header>
);
