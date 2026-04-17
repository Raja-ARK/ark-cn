"use client";

import {
  type HighlightChunk,
  Highlight as HighlightPrimitive,
  type HighlightProps as HighlightPrimitiveProps,
  type UseHighlightProps,
  useHighlight,
} from "@ark-ui/react/highlight";
import { cn } from "@/lib/utils";

export type HighlightProps = HighlightPrimitiveProps;

export const Highlight = ({ className, ...props }: HighlightProps) => (
  <HighlightPrimitive
    className={cn(
      "rounded-sm bg-warning/15 px-0.5 text-foreground dark:bg-warning/20",
      className,
    )}
    data-slot="highlight"
    {...props}
  />
);

export type { HighlightChunk, UseHighlightProps };
export { useHighlight };
