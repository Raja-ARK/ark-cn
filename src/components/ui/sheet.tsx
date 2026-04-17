"use client";

import { Dialog as SheetPrimitive } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { cva, type VariantProps } from "class-variance-authority";
import { XIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export type SheetProps = SheetPrimitive.RootProps;

export const Sheet = (props: SheetProps) => (
  <SheetPrimitive.Root data-slot="sheet" {...props} />
);

export const SheetTrigger = (props: SheetPrimitive.TriggerProps) => (
  <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
);

const popupVariants = cva(
  // Explicit rows: without this, align-content: stretch on a full-height grid
  // stretches implicit `auto` rows equally — header/footer balloon to ~1/3 of the viewport.
  "fixed z-[calc(50+var(--layer-index,0))] grid min-h-0 w-full grid-rows-[auto_minmax(0,1fr)_auto] gap-0 border-border bg-popover text-popover-foreground shadow-xl outline-none transition-all duration-200 data-[state=closed]:opacity-0 data-[state=open]:opacity-100 data-has-nested:data-[state=open]:scale-[calc(1-var(--nested-layer-count,0)*0.05)]",
  {
    compoundVariants: [
      {
        className:
          "inset-y-0 right-0 h-dvh max-w-[min(92vw,32rem)] border-l data-[state=closed]:translate-x-full data-[state=open]:translate-x-0",
        side: "right",
        variant: "default",
      },
      {
        className:
          "inset-y-0 left-0 h-dvh max-w-[min(92vw,32rem)] border-r data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0",
        side: "left",
        variant: "default",
      },
      {
        className:
          "top-0 inset-x-0 max-h-[min(88dvh,30rem)] border-b data-[state=closed]:-translate-y-full data-[state=open]:translate-y-0",
        side: "top",
        variant: "default",
      },
      {
        className:
          "bottom-0 inset-x-0 max-h-[min(88dvh,30rem)] border-t data-[state=closed]:translate-y-full data-[state=open]:translate-y-0",
        side: "bottom",
        variant: "default",
      },
      {
        className:
          "right-3 top-3 bottom-3 max-w-[min(92vw,32rem)] rounded-xl border data-[state=closed]:translate-x-full data-[state=open]:translate-x-0 sm:right-6 sm:top-6 sm:bottom-6",
        side: "right",
        variant: "inset",
      },
      {
        className:
          "left-3 top-3 bottom-3 max-w-[min(92vw,32rem)] rounded-xl border data-[state=closed]:-translate-x-full data-[state=open]:translate-x-0 sm:left-6 sm:top-6 sm:bottom-6",
        side: "left",
        variant: "inset",
      },
      {
        className:
          "left-3 right-3 top-3 w-auto max-w-none min-w-0 max-h-[min(88dvh,30rem)] overflow-hidden rounded-xl border data-[state=closed]:-translate-y-full data-[state=open]:translate-y-0 sm:left-6 sm:right-6 sm:top-6",
        side: "top",
        variant: "inset",
      },
      {
        className:
          "left-3 right-3 bottom-3 w-auto max-w-none min-w-0 max-h-[min(88dvh,30rem)] overflow-hidden rounded-xl border data-[state=closed]:translate-y-full data-[state=open]:translate-y-0 sm:left-6 sm:right-6 sm:bottom-6",
        side: "bottom",
        variant: "inset",
      },
    ],
    defaultVariants: {
      side: "right",
      variant: "default",
    },
    variants: {
      side: {
        bottom: "",
        left: "",
        right: "",
        top: "",
      },
      variant: {
        default: "",
        inset: "",
      },
    },
  },
);

export type SheetPopupProps = SheetPrimitive.ContentProps &
  VariantProps<typeof popupVariants> & {
    backdropClassName?: string;
    closeProps?: SheetPrimitive.CloseTriggerProps;
    showCloseButton?: boolean;
  };

export const SheetPopup = ({
  backdropClassName,
  children,
  className,
  closeProps,
  showCloseButton = true,
  side = "right",
  variant = "default",
  ...contentProps
}: SheetPopupProps) => {
  const {
    className: closeClassName,
    children: closeChildren,
    ...closeRest
  } = closeProps ?? {};

  return (
    <Portal>
      <SheetPrimitive.Backdrop
        className={cn(
          "fixed inset-0 z-[calc(50+var(--layer-index,0))] bg-black/40 backdrop-blur-md transition-[opacity,backdrop-filter] duration-200 dark:bg-black/50 dark:backdrop-blur-lg data-[state=closed]:opacity-0 data-[state=open]:opacity-100 supports-backdrop-filter:bg-black/25 supports-backdrop-filter:dark:bg-black/35",
          backdropClassName,
        )}
        data-slot="sheet-backdrop"
      />
      <SheetPrimitive.Positioner
        className="fixed inset-0 z-[calc(50+var(--layer-index,0))]"
        data-slot="sheet-positioner"
      >
        <SheetPrimitive.Content
          className={cn(popupVariants({ side, variant }), className)}
          data-slot="sheet-content"
          {...contentProps}
        >
          {showCloseButton ? (
            <SheetPrimitive.CloseTrigger
              aria-label="Close"
              className={cn(
                "absolute top-3 inset-e-3 z-10 inline-flex size-8 cursor-pointer items-center justify-center rounded-md text-muted-foreground outline-none transition-colors hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
                closeClassName,
              )}
              {...closeRest}
            >
              {closeChildren ?? <XIcon className="size-4" />}
            </SheetPrimitive.CloseTrigger>
          ) : null}
          {children}
        </SheetPrimitive.Content>
      </SheetPrimitive.Positioner>
    </Portal>
  );
};

export const SheetContent = SheetPopup;

export const SheetHeader = ({
  className,
  ...props
}: ComponentProps<typeof ark.div>) => (
  <ark.div
    className={cn(
      "flex shrink-0 flex-col gap-1.5 border-border border-b px-6 pt-6 pb-4 text-start",
      className,
    )}
    data-slot="sheet-header"
    {...props}
  />
);

const footerVariants = cva(
  "mt-auto flex shrink-0 flex-col-reverse gap-2 border-border border-t px-6 py-4 sm:flex-row sm:justify-end",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        bare: "border-t-0 pt-0",
        default: "bg-muted/35",
      },
    },
  },
);

export const SheetFooter = ({
  className,
  variant,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof footerVariants>) => (
  <ark.div
    className={cn(footerVariants({ variant }), className)}
    data-slot="sheet-footer"
    {...props}
  />
);

export const SheetTitle = ({
  className,
  ...props
}: SheetPrimitive.TitleProps) => (
  <SheetPrimitive.Title
    className={cn("font-semibold text-lg leading-none", className)}
    data-slot="sheet-title"
    {...props}
  />
);

export const SheetDescription = ({
  className,
  ...props
}: SheetPrimitive.DescriptionProps) => (
  <SheetPrimitive.Description
    className={cn("text-muted-foreground text-sm", className)}
    data-slot="sheet-description"
    {...props}
  />
);

export const SheetPanel = ({
  className,
  scrollFade = true,
  ...props
}: ComponentProps<"div"> & {
  scrollFade?: boolean;
}) => (
  <ScrollArea
    className="min-h-0 flex-1 rounded-none border-0 bg-transparent"
    scrollFade={scrollFade}
    scrollbarGutter
  >
    <ark.div
      className={cn("grid gap-4 px-6 py-4", className)}
      data-slot="sheet-panel"
      {...props}
    />
  </ScrollArea>
);

export const SheetClose = (props: SheetPrimitive.CloseTriggerProps) => (
  <SheetPrimitive.CloseTrigger data-slot="sheet-close" {...props} />
);

export const SheetPortal = Portal;
export const SheetBackdrop = SheetPrimitive.Backdrop;
export const SheetOverlay = SheetBackdrop;

export const SheetContext = SheetPrimitive.Context;

export const SheetRootProvider = (props: SheetPrimitive.RootProviderProps) => (
  <SheetPrimitive.RootProvider {...props} />
);

export {
  useDialog as useSheet,
  useDialogContext as useSheetContext,
} from "@ark-ui/react/dialog";
