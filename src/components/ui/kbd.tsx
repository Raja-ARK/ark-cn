"use client";

import { ark } from "@ark-ui/react/factory";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const Kbd = ({
  className,
  ...props
}: ComponentProps<typeof ark.kbd>) => {
  return (
    <ark.kbd
      className={cn(
        "pointer-events-none inline-flex h-5 min-w-5 select-none items-center justify-center gap-1 rounded bg-muted px-1 font-medium font-sans text-muted-foreground text-xs [&_svg:not([class*='size-'])]:size-3",
        className,
      )}
      data-slot="kbd"
      {...props}
    />
  );
};

export const KbdGroup = ({
  className,
  ...props
}: ComponentProps<typeof ark.kbd>) => {
  return (
    <ark.kbd
      className={cn("inline-flex items-center gap-1", className)}
      data-slot="kbd-group"
      {...props}
    />
  );
};
