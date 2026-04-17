"use client";

import { ark } from "@ark-ui/react/factory";
import { ChevronRightIcon, MoreHorizontalIcon } from "lucide-react";
import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

export const Breadcrumb = ({
  className,
  ...props
}: ComponentProps<typeof ark.nav>) => (
  <ark.nav
    aria-label="breadcrumb"
    data-slot="breadcrumb"
    className={cn(className)}
    {...props}
  />
);

export const BreadcrumbList = ({
  className,
  ...props
}: ComponentProps<typeof ark.ol>) => (
  <ark.ol
    data-slot="breadcrumb-list"
    className={cn(
      "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground",
      className,
    )}
    {...props}
  />
);

export const BreadcrumbItem = ({
  className,
  ...props
}: ComponentProps<typeof ark.li>) => (
  <ark.li
    data-slot="breadcrumb-item"
    className={cn("inline-flex items-center gap-1", className)}
    {...props}
  />
);

export const BreadcrumbLink = ({
  className,
  ...props
}: ComponentProps<typeof ark.a>) => (
  <ark.a
    data-slot="breadcrumb-link"
    className={cn("transition-colors hover:text-foreground", className)}
    {...props}
  />
);

export const BreadcrumbPage = ({
  className,
  ...props
}: ComponentProps<typeof ark.span>) => (
  <ark.span
    data-slot="breadcrumb-page"
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={cn("font-normal text-foreground", className)}
    {...props}
  />
);

export const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: ComponentProps<typeof ark.li>) => (
  <ark.li
    data-slot="breadcrumb-separator"
    role="presentation"
    aria-hidden="true"
    className={cn("[&>svg]:size-3.5", className)}
    {...props}
  >
    {children ?? <ChevronRightIcon className="rtl:rotate-180" />}
  </ark.li>
);

export const BreadcrumbEllipsis = ({
  className,
  ...props
}: ComponentProps<typeof ark.span>) => (
  <ark.span
    data-slot="breadcrumb-ellipsis"
    role="presentation"
    aria-hidden="true"
    className={cn(
      "flex size-5 items-center justify-center [&>svg]:size-4",
      className,
    )}
    {...props}
  >
    <MoreHorizontalIcon />
    <ark.span className="sr-only">More</ark.span>
  </ark.span>
);
