"use client";

import {
  SignaturePad as SignaturePadPrimitive,
  useSignaturePad,
  useSignaturePadContext,
} from "@ark-ui/react/signature-pad";
import type { VariantProps } from "class-variance-authority";
import { XIcon } from "lucide-react";
import type { ComponentProps, CSSProperties } from "react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export type SignaturePadOwnProps = {
  /** Canvas width in CSS pixels. Default 20rem. */
  width?: string | number;
  /** Canvas height in CSS pixels. Default 10rem. */
  height?: string | number;
};

const layoutStyle = ({
  width = "20rem",
  height = "10rem",
}: SignaturePadOwnProps): CSSProperties =>
  ({
    "--signature-pad-width": typeof width === "number" ? `${width}px` : width,
    "--signature-pad-height":
      typeof height === "number" ? `${height}px` : height,
  }) as CSSProperties;

export type SignaturePadProps = ComponentProps<
  typeof SignaturePadPrimitive.Root
> &
  SignaturePadOwnProps;

export const SignaturePad = ({
  className,
  width,
  height,
  style,
  ...props
}: SignaturePadProps) => (
  <SignaturePadPrimitive.Root
    className={cn(
      "flex w-full max-w-full flex-col gap-1.5 text-foreground",
      "w-(--signature-pad-width)",
      "data-disabled:opacity-50 data-disabled:grayscale",
      className,
    )}
    data-slot="signature-pad"
    style={{ ...layoutStyle({ width, height }), ...style }}
    {...props}
  />
);

export type SignaturePadLabelProps = ComponentProps<
  typeof SignaturePadPrimitive.Label
>;

export const SignaturePadLabel = ({
  className,
  ...props
}: SignaturePadLabelProps) => (
  <SignaturePadPrimitive.Label
    className={cn(
      "text-sm font-medium text-foreground leading-none select-none",
      className,
    )}
    data-slot="signature-pad-label"
    {...props}
  />
);

export type SignaturePadControlProps = ComponentProps<
  typeof SignaturePadPrimitive.Control
>;

export const SignaturePadControl = ({
  className,
  ...props
}: SignaturePadControlProps) => (
  <SignaturePadPrimitive.Control
    className={cn(
      "relative flex min-h-(--signature-pad-height) min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-muted/40",
      "data-disabled:cursor-not-allowed",
      className,
    )}
    data-slot="signature-pad-control"
    {...props}
  />
);

export type SignaturePadSegmentProps = ComponentProps<
  typeof SignaturePadPrimitive.Segment
>;

export const SignaturePadSegment = ({
  className,
  ...props
}: SignaturePadSegmentProps) => (
  <SignaturePadPrimitive.Segment
    className={cn(
      "h-full min-h-(--signature-pad-height) w-full touch-none text-foreground",
      // Ark's SignaturePad renders filled paths; use fill to avoid the "double stroke" look.
      "[&_path]:fill-current [&_path]:stroke-none",
      "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:outline-none",
      className,
    )}
    data-slot="signature-pad-segment"
    {...props}
  />
);

export type SignaturePadClearTriggerProps =
  SignaturePadPrimitive.ClearTriggerProps & VariantProps<typeof buttonVariants>;

export const SignaturePadClearTrigger = ({
  className,
  variant = "ghost",
  size = "icon-sm",
  ...props
}: SignaturePadClearTriggerProps) => (
  <SignaturePadPrimitive.ClearTrigger
    className={cn(
      buttonVariants({ variant, size }),
      "absolute top-2 right-2",
      className,
    )}
    data-slot="signature-pad-clear-trigger"
    {...props}
  />
);

export type SignaturePadGuideProps = ComponentProps<
  typeof SignaturePadPrimitive.Guide
>;

export const SignaturePadGuide = ({
  className,
  ...props
}: SignaturePadGuideProps) => (
  <SignaturePadPrimitive.Guide
    className={cn(
      "pointer-events-none absolute right-6 bottom-6 left-6 border-border border-dashed border-b",
      className,
    )}
    data-slot="signature-pad-guide"
    {...props}
  />
);

export type SignaturePadHiddenInputProps = ComponentProps<
  typeof SignaturePadPrimitive.HiddenInput
>;

export const SignaturePadHiddenInput = ({
  className,
  ...props
}: SignaturePadHiddenInputProps) => (
  <SignaturePadPrimitive.HiddenInput
    className={cn(className)}
    data-slot="signature-pad-hidden-input"
    {...props}
  />
);

export type SignaturePadRootProviderProps = ComponentProps<
  typeof SignaturePadPrimitive.RootProvider
> &
  SignaturePadOwnProps;

export const SignaturePadRootProvider = ({
  className,
  width,
  height,
  style,
  ...props
}: SignaturePadRootProviderProps) => (
  <SignaturePadPrimitive.RootProvider
    className={cn(
      "flex w-full max-w-full flex-col gap-1.5 text-foreground",
      "w-(--signature-pad-width)",
      "data-disabled:opacity-50 data-disabled:grayscale",
      className,
    )}
    data-slot="signature-pad-provider"
    style={{ ...layoutStyle({ width, height }), ...style }}
    {...props}
  />
);

export const SignaturePadContext = SignaturePadPrimitive.Context;

export type SignaturePadFieldProps = Omit<
  SignaturePadControlProps,
  "children"
> & {
  /** Content shown inside the clear button (usually an icon). */
  children?: SignaturePadClearTriggerProps["children"];
  /** Hide the dashed guide line. */
  hideGuide?: boolean;
  /** Extra props for the clear trigger. */
  clearTriggerProps?: Omit<SignaturePadClearTriggerProps, "children">;
  /** Extra props for the segment. */
  segmentProps?: SignaturePadSegmentProps;
  /** Extra props for the guide. */
  guideProps?: SignaturePadGuideProps;
};

export const SignaturePadField = ({
  className,
  children,
  hideGuide,
  clearTriggerProps,
  segmentProps,
  guideProps,
  ...controlProps
}: SignaturePadFieldProps) => (
  <SignaturePadControl className={className} {...controlProps}>
    <SignaturePadSegment {...segmentProps} />
    <SignaturePadClearTrigger
      aria-label="Clear signature"
      type="button"
      {...clearTriggerProps}
    >
      {children ?? <XIcon className="size-4" />}
    </SignaturePadClearTrigger>
    {hideGuide ? null : <SignaturePadGuide {...guideProps} />}
  </SignaturePadControl>
);

export type {
  SignaturePadDrawDetails,
  SignaturePadDrawEndDetails,
  SignaturePadDrawingOptions,
} from "@ark-ui/react/signature-pad";
export { useSignaturePad, useSignaturePadContext };
