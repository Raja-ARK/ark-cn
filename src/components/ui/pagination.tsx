"use client";

import { Pagination as PaginationPrimitive } from "@ark-ui/react/pagination";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "@/components/ui/button";

export type PaginationProps = PaginationPrimitive.RootProps;

export const Pagination = ({ className, ...props }: PaginationProps) => (
  <PaginationPrimitive.Root
    className={cn("flex flex-wrap items-center gap-1.5", className)}
    data-slot="pagination"
    {...props}
  />
);

export type PaginationRootProviderProps = PaginationPrimitive.RootProviderProps;

export const PaginationRootProvider = ({
  ...props
}: PaginationRootProviderProps) => (
  <PaginationPrimitive.RootProvider
    data-slot="pagination-root-provider"
    {...props}
  />
);

export type PaginationPrevTriggerProps = PaginationPrimitive.PrevTriggerProps;

export const PaginationPrevTrigger = ({
  ...props
}: PaginationPrevTriggerProps) => (
  <PaginationPrimitive.PrevTrigger
    data-slot="pagination-prev-trigger"
    {...props}
  />
);

export type PaginationNextTriggerProps = PaginationPrimitive.NextTriggerProps;

export const PaginationNextTrigger = ({
  ...props
}: PaginationNextTriggerProps) => (
  <PaginationPrimitive.NextTrigger
    data-slot="pagination-next-trigger"
    {...props}
  />
);

export type PaginationFirstTriggerProps = PaginationPrimitive.FirstTriggerProps;

export const PaginationFirstTrigger = ({
  ...props
}: PaginationFirstTriggerProps) => (
  <PaginationPrimitive.FirstTrigger
    data-slot="pagination-first-trigger"
    {...props}
  />
);

export type PaginationLastTriggerProps = PaginationPrimitive.LastTriggerProps;

export const PaginationLastTrigger = ({
  ...props
}: PaginationLastTriggerProps) => (
  <PaginationPrimitive.LastTrigger
    data-slot="pagination-last-trigger"
    {...props}
  />
);

export type PaginationItemProps = PaginationPrimitive.ItemProps;

export const PaginationItem = ({ ...props }: PaginationItemProps) => (
  <PaginationPrimitive.Item data-slot="pagination-item" {...props} />
);

export type PaginationEllipsisProps = PaginationPrimitive.EllipsisProps;

export const PaginationEllipsis = ({
  className,
  children,
  ...props
}: PaginationEllipsisProps) => (
  <PaginationPrimitive.Ellipsis
    className={cn(
      "inline-flex h-9 min-w-9 items-center justify-center px-1 text-muted-foreground text-sm sm:h-8",
      className,
    )}
    data-slot="pagination-ellipsis"
    {...props}
  >
    {children ? children : "…"}
  </PaginationPrimitive.Ellipsis>
);

export type PaginationContextProps = PaginationPrimitive.ContextProps;

export const PaginationContext = (props: PaginationContextProps) => (
  <PaginationPrimitive.Context {...props} />
);

export type PaginationItemsProps = VariantProps<typeof buttonVariants> & {
  itemType?: "button" | "link";
};

export const PaginationItems = ({
  size = "icon",
  variant = "ghost",
  itemType = "button",
}: PaginationItemsProps) => {
  return (
    <PaginationContext>
      {(pagination) =>
        pagination.pages.map((page, index) =>
          page.type === "page" ? (
            <PaginationItem key={index} {...page} asChild>
              {itemType === "button" ? (
                <Button
                  size={size}
                  variant={
                    pagination?.page === page.value ? "outline" : variant
                  }
                >
                  {page.value}
                </Button>
              ) : (
                <a
                  key={index}
                  className={buttonVariants({ size, variant })}
                  {...pagination.getItemProps(page)}
                >
                  {page.value}
                </a>
              )}
            </PaginationItem>
          ) : (
            <PaginationEllipsis key={index} index={index} />
          ),
        )
      }
    </PaginationContext>
  );
};

export type {
  PaginationItemLabelDetails,
  PaginationPageChangeDetails,
  PaginationPageSizeChangeDetails,
  PaginationPageUrlDetails,
} from "@ark-ui/react/pagination";

export {
  type UsePaginationContext,
  type UsePaginationProps,
  type UsePaginationReturn,
  usePagination,
  usePaginationContext,
} from "@ark-ui/react/pagination";
