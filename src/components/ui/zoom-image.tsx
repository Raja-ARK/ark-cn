"use client";

import type { ComponentProps } from "react";
import {
  ImageCropper,
  ImageCropperImage,
  ImageCropperSelection,
  ImageCropperViewport,
} from "@/components/ui/image-cropper";
import { cn } from "@/lib/utils";

export type ZoomImageProps = Omit<
  ComponentProps<typeof ImageCropper>,
  "children" | "fixedCropArea"
> & {
  alt: string;
  src: string;
  viewportClassName?: string;
};

/** Pinch / wheel zoom and pan preview using Image Cropper with a fixed full-viewport crop (no resize handles). */
export const ZoomImage = ({
  alt,
  className,
  src,
  viewportClassName,
  ...props
}: ZoomImageProps) => (
  <ImageCropper
    fixedCropArea
    className={cn(
      "max-w-none [--cropper-overlay-color:transparent]",
      className,
    )}
    {...props}
  >
    <ImageCropperViewport
      className={cn(
        "relative aspect-video w-full overflow-hidden rounded-lg bg-muted",
        viewportClassName,
      )}
    >
      <ImageCropperImage alt={alt} src={src} />
      <ImageCropperSelection className="cursor-grab border-transparent data-dragging:cursor-grabbing" />
    </ImageCropperViewport>
  </ImageCropper>
);
