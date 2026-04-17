"use client";

import { Dialog } from "@ark-ui/react/dialog";
import { ark } from "@ark-ui/react/factory";
import { Portal } from "@ark-ui/react/portal";
import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentProps, forwardRef } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const AlertDialog = ({
  closeOnInteractOutside = false,
  role = "alertdialog",
  ...props
}: Dialog.RootProps) => (
  <Dialog.Root
    role={role}
    closeOnInteractOutside={closeOnInteractOutside}
    {...props}
  />
);

export const AlertDialogTrigger = ({
  className,
  ...props
}: Dialog.TriggerProps) => (
  <Dialog.Trigger className={cn(className)} {...props} />
);

export const AlertDialogPortal = ({
  ...props
}: ComponentProps<typeof Portal>) => <Portal {...props} />;

export const AlertDialogBackdrop = ({
  className,
  ...props
}: Dialog.BackdropProps) => (
  <Dialog.Backdrop
    className={cn(
      "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-200 dark:bg-black/50 dark:backdrop-blur-md data-[state=closed]:opacity-0 data-[state=open]:opacity-100 supports-backdrop-filter:bg-black/25 supports-backdrop-filter:dark:bg-black/35",
      className,
    )}
    {...props}
  />
);

export const AlertDialogOverlay = AlertDialogBackdrop;

const positionerVariants = cva("fixed inset-0 z-50 flex overscroll-y-none ", {
  defaultVariants: {
    bottomStick: true,
  },
  variants: {
    bottomStick: {
      false: "items-center justify-center p-4",
      true: "items-end justify-center sm:items-center",
    },
  },
});

const contentVariants = cva(
  "relative z-50 grid min-h-0 max-h-[min(calc(100dvh-2rem),var(--alert-dialog-max-h,32rem))] w-full shrink-0 gap-4 overflow-x-hidden overflow-y-auto rounded-xl border border-border bg-popover px-6 pt-6 pb-0 text-card-foreground shadow-lg outline-none transition-[opacity,transform] duration-150 data-[state=closed]:scale-[0.98] data-[state=closed]:opacity-0 data-[state=open]:scale-100 data-[state=open]:opacity-100",
  {
    defaultVariants: {
      size: "default",
    },
    variants: {
      size: {
        default: "max-w-lg",
        sm: "max-w-sm gap-3 px-5 pt-5 pb-0 text-sm **:data-[slot=alert-dialog-title]:text-base",
      },
    },
  },
);

export type AlertDialogPopupProps = Dialog.ContentProps & {
  backdropClassName?: string;
  bottomStickOnMobile?: boolean;
  positionerClassName?: string;
  size?: VariantProps<typeof contentVariants>["size"];
};

const AlertDialogPopupInner = forwardRef<HTMLDivElement, AlertDialogPopupProps>(
  (
    {
      backdropClassName,
      bottomStickOnMobile = true,
      children,
      className,
      positionerClassName,
      size = "default",
      ...contentProps
    },
    ref,
  ) => (
    <Portal>
      <AlertDialogBackdrop className={backdropClassName} />
      <Dialog.Positioner
        className={cn(
          positionerVariants({ bottomStick: bottomStickOnMobile }),
          positionerClassName,
        )}
      >
        <Dialog.Content
          ref={ref}
          className={cn(contentVariants({ size }), className)}
          {...contentProps}
        >
          {children}
        </Dialog.Content>
      </Dialog.Positioner>
    </Portal>
  ),
);

export const AlertDialogPopup = AlertDialogPopupInner;

export const AlertDialogContent = AlertDialogPopup;

export const AlertDialogHeader = ({
  className,
  ...props
}: ComponentProps<typeof ark.div>) => (
  <ark.div
    className={cn("flex flex-col gap-2 text-center sm:text-start", className)}
    {...props}
  />
);

const footerVariants = cva(
  "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end sm:gap-2",
  {
    defaultVariants: {
      variant: "default",
    },
    variants: {
      variant: {
        bare: "pb-6",
        default:
          "-mx-6 mt-2 border-border border-t bg-muted/40 px-6 pt-4 pb-6 sm:rounded-b-xl",
      },
    },
  },
);

export const AlertDialogFooter = ({
  className,
  variant,
  ...props
}: ComponentProps<"div"> & VariantProps<typeof footerVariants>) => (
  <ark.div className={cn(footerVariants({ variant }), className)} {...props} />
);

export const AlertDialogTitle = ({
  className,
  ...props
}: Dialog.TitleProps) => (
  <Dialog.Title
    className={cn("font-semibold text-lg leading-none", className)}
    {...props}
  />
);

export const AlertDialogDescription = ({
  className,
  ...props
}: Dialog.DescriptionProps) => (
  <Dialog.Description
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
);

export const AlertDialogMedia = ({
  className,
  ...props
}: ComponentProps<typeof ark.div>) => (
  <ark.div
    className={cn(
      "mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-muted sm:mx-0 [&_svg]:size-6 [&_svg]:text-muted-foreground",
      className,
    )}
    {...props}
  />
);

export const AlertDialogPanel = ({
  className,
  ...props
}: ComponentProps<typeof ark.div>) => (
  <ark.div className={cn("flex w-full flex-col gap-3", className)} {...props} />
);

export const AlertDialogClose = ({
  className,
  ...props
}: Dialog.CloseTriggerProps) => (
  <Dialog.CloseTrigger
    className={cn(
      "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background",
      className,
    )}
    {...props}
  />
);

export const AlertDialogCancel = ({
  className,
  variant = "ghost",
  ...props
}: Dialog.CloseTriggerProps & {
  variant?: VariantProps<typeof buttonVariants>["variant"];
}) => (
  <Dialog.CloseTrigger
    className={cn(buttonVariants({ size: "default", variant }), className)}
    {...props}
  />
);

export const AlertDialogAction = ({
  className,
  variant = "default",
  ...props
}: Dialog.CloseTriggerProps & {
  variant?: VariantProps<typeof buttonVariants>["variant"];
}) => (
  <Dialog.CloseTrigger
    className={cn(buttonVariants({ size: "default", variant }), className)}
    {...props}
  />
);

export const AlertDialogRootProvider = ({
  ...props
}: Dialog.RootProviderProps) => <Dialog.RootProvider {...props} />;

export {
  useDialog as useAlertDialog,
  useDialog,
  useDialogContext as useAlertDialogContext,
} from "@ark-ui/react/dialog";
