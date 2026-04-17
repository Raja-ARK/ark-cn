"use client";

import {
  DownloadTrigger as DownloadTriggerPrimitive,
  type DownloadTriggerProps as DownloadTriggerPrimitiveProps,
} from "@ark-ui/react/download-trigger";
import type { VariantProps } from "class-variance-authority";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type DownloadTriggerProps = DownloadTriggerPrimitiveProps & {
  size?: VariantProps<typeof buttonVariants>["size"];
  variant?: VariantProps<typeof buttonVariants>["variant"];
};

export const DownloadTrigger = ({
  className,
  size = "default",
  variant = "default",
  ...props
}: DownloadTriggerProps) => (
  <DownloadTriggerPrimitive
    className={cn(buttonVariants({ variant, size, className }))}
    data-slot="download-trigger"
    {...props}
  />
);
