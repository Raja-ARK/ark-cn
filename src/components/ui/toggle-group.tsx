"use client";

import { ToggleGroup as ToggleGroupPrimitive } from "@ark-ui/react/toggle-group";
import { cva, type VariantProps } from "class-variance-authority";
import { createContext, useContext } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

const toggleGroupRootVariants = cva(
  "inline-flex w-fit gap-px rounded-lg border border-input bg-muted/40 p-0.5 data-[orientation=vertical]:flex-col",
);

const toggleGroupItemVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-md border font-medium text-sm outline-none transition-colors disabled:pointer-events-none disabled:opacity-50 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    defaultVariants: {
      size: "lg",
      variant: "default",
    },
    variants: {
      size: {
        default: "h-9 min-w-9 px-3 sm:h-8 sm:min-w-8",
        lg: "h-10 min-w-10 px-3.5 sm:h-9 sm:min-w-9",
        sm: "h-8 min-w-8 px-2.5 sm:h-7 sm:min-w-7",
      },
      variant: {
        default:
          "border-transparent bg-transparent text-foreground hover:bg-accent data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-xs/5",
        outline:
          "border-input/70 bg-background text-foreground hover:bg-accent/60 data-[state=on]:border-primary/30 data-[state=on]:bg-primary/12 data-[state=on]:text-primary",
      },
    },
  },
);

type ToggleGroupStyleContextValue = {
  size?: VariantProps<typeof toggleGroupItemVariants>["size"];
  variant?: VariantProps<typeof toggleGroupItemVariants>["variant"];
};

const ToggleGroupStyleContext = createContext<ToggleGroupStyleContextValue>({
  size: "lg",
  variant: "default",
});

export type ToggleGroupProps = ToggleGroupPrimitive.RootProps &
  VariantProps<typeof toggleGroupItemVariants>;

export const ToggleGroup = ({
  className,
  size,
  variant,
  ...props
}: ToggleGroupProps) => (
  <ToggleGroupStyleContext.Provider value={{ size, variant }}>
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      className={cn(toggleGroupRootVariants(), className)}
      {...props}
    />
  </ToggleGroupStyleContext.Provider>
);

export type ToggleGroupItemProps = ToggleGroupPrimitive.ItemProps &
  VariantProps<typeof toggleGroupItemVariants>;

export const ToggleGroupItem = ({
  className,
  size,
  variant,
  ...props
}: ToggleGroupItemProps) => {
  const group = useContext(ToggleGroupStyleContext);

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      className={cn(
        toggleGroupItemVariants({
          size: size ?? group.size,
          variant: variant ?? group.variant,
        }),
        className,
      )}
      {...props}
    />
  );
};

export type ToggleGroupSeparatorProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
};

export const ToggleGroupSeparator = ({
  className,
  orientation = "vertical",
}: ToggleGroupSeparatorProps) => (
  <Separator
    className={cn("bg-input/70", className)}
    data-slot="toggle-group-separator"
    orientation={orientation}
  />
);

export const ToggleGroupContext = ToggleGroupPrimitive.Context;
export const ToggleGroupRootProvider = ToggleGroupPrimitive.RootProvider;

export type {
  UseToggleGroupProps,
  UseToggleGroupReturn,
} from "@ark-ui/react/toggle-group";
export {
  useToggleGroup,
  useToggleGroupContext,
} from "@ark-ui/react/toggle-group";
