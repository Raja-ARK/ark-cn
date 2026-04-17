"use client";

import { Carousel as CarouselPrimitive } from "@ark-ui/react/carousel";
import type { VariantProps } from "class-variance-authority";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PauseIcon,
  PlayIcon,
} from "lucide-react";
import { Button, type buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Carousel = ({ ...props }: CarouselPrimitive.RootProps) => {
  return <CarouselPrimitive.Root {...props} />;
};

export const CarouselControl = ({
  className,
  ...props
}: CarouselPrimitive.ControlProps) => {
  return (
    <CarouselPrimitive.Control
      className={cn("relative", className)}
      {...props}
    />
  );
};

export const CarouselPrevious = ({
  className,
  variant = "outline",
  size = "icon-sm",
  anchorButtons = false,
  ...props
}: CarouselPrimitive.PrevTriggerProps & {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  anchorButtons?: boolean;
}) => {
  return (
    <CarouselPrimitive.PrevTrigger {...props} asChild>
      <Button
        variant={variant}
        size={size}
        className={cn(
          "data-[orientation='vertical']:rotate-90",
          anchorButtons &&
            "absolute touch-manipulation rounded-full before:absolute before:inset-0 before:rounded-full",
          anchorButtons &&
            "data-[orientation='horizontal']:top-1/2 data-[orientation='horizontal']:-left-12 data-[orientation='horizontal']:-translate-y-1/2",
          anchorButtons &&
            "data-[orientation='vertical']:-top-12 data-[orientation='vertical']:left-1/2 data-[orientation='vertical']:-translate-x-1/2 ",
          className,
        )}
      >
        <ChevronLeftIcon />
        <span className="sr-only">Previous sli de</span>
      </Button>
    </CarouselPrimitive.PrevTrigger>
  );
};

export const CarouselNext = ({
  className,
  variant = "outline",
  size = "icon-sm",
  anchorButtons = false,
  ...props
}: CarouselPrimitive.NextTriggerProps & {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  anchorButtons?: boolean;
}) => {
  return (
    <CarouselPrimitive.NextTrigger {...props} asChild>
      <Button
        data-slot="carousel-next"
        variant={variant}
        size={size}
        className={cn(
          "data-[orientation='vertical']:rotate-90",
          anchorButtons &&
            "absolute touch-manipulation rounded-full before:content-[''] before:absolute before:inset-0 before:rounded-full",
          anchorButtons &&
            "data-[orientation='horizontal']:top-1/2 data-[orientation='horizontal']:-right-12 data-[orientation='horizontal']:-translate-y-1/2",
          anchorButtons &&
            "data-[orientation='vertical']:-bottom-12 data-[orientation='vertical']:left-1/2 data-[orientation='vertical']:-translate-x-1/2 ",
          className,
        )}
      >
        <ChevronRightIcon />
        <span className="sr-only">Next slide</span>
      </Button>
    </CarouselPrimitive.NextTrigger>
  );
};

export const CarouselContent = ({
  className,
  ...props
}: CarouselPrimitive.ItemGroupProps) => {
  return (
    <CarouselPrimitive.ItemGroup
      className={cn("w-full h-full", className)}
      {...props}
    />
  );
};

export const CarouselItem = ({
  children,
  ...props
}: CarouselPrimitive.ItemProps) => {
  return <CarouselPrimitive.Item {...props}>{children}</CarouselPrimitive.Item>;
};

export const CarouselIndicatorGroup = ({
  className,
  ...props
}: CarouselPrimitive.IndicatorGroupProps) => {
  return (
    <CarouselPrimitive.IndicatorGroup
      className={cn(
        "flex items-center justify-center data-[orientation='vertical']:flex-col gap-2 p-5",
        className,
      )}
      {...props}
    />
  );
};

export const CarouselIndicatorItem = ({
  className,
  ...props
}: CarouselPrimitive.IndicatorProps) => {
  return (
    <CarouselPrimitive.Indicator
      className={cn(
        "cursor-pointer disabled:cursor-default w-2 h-2 rounded-full bg-accent data-current:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-ring",
        className,
      )}
      {...props}
    />
  );
};

export const CarouselAutoPlayIndicator = CarouselPrimitive.AutoplayIndicator;

export const CarouselAutoplay = ({
  className,
  variant = "outline",
  size = "icon-sm",
  children,
  ...props
}: CarouselPrimitive.AutoplayTriggerProps & {
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
}) => {
  return (
    <CarouselPrimitive.AutoplayTrigger {...props} asChild>
      <Button
        variant={variant}
        size={size}
        className={cn(className)}
        {...props}
      >
        {children || (
          <CarouselPrimitive.AutoplayIndicator fallback={<PlayIcon />}>
            <PauseIcon />
          </CarouselPrimitive.AutoplayIndicator>
        )}
        <span className="sr-only">Autoplay</span>
      </Button>
    </CarouselPrimitive.AutoplayTrigger>
  );
};

export const CarouselContext = CarouselPrimitive.Context;
