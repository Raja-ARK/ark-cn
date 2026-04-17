"use client";

import {
  FocusTrap as FocusTrapPrimitive,
  type FocusTrapProps as FocusTrapPrimitiveProps,
} from "@ark-ui/react/focus-trap";
import { cn } from "@/lib/utils";

export type FocusTrapProps = FocusTrapPrimitiveProps;

export const FocusTrap = ({ className, ...props }: FocusTrapProps) => (
  <FocusTrapPrimitive
    className={cn(className)}
    data-slot="focus-trap"
    {...props}
  />
);
