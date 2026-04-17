import { ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ImageCropper,
  ImageCropperContext,
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperSelection,
  ImageCropperViewport,
  imageCropperHandles,
} from "@/components/ui/image-cropper";

const IMAGE_CROPPER_SAMPLE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";

const ImageCropperContextDemo = () => (
  <div className="flex w-full max-w-md flex-col gap-3">
    <ImageCropper className="max-w-md">
      <ImageCropperContext>
        {(context) => (
          <div className="flex items-center gap-2">
            <Button
              size="icon-sm"
              type="button"
              variant="outline"
              onClick={() => context.zoomBy(-0.1)}
            >
              <ZoomOutIcon aria-hidden />
            </Button>
            <span className="min-w-12 text-center font-mono text-muted-foreground text-xs tabular-nums">
              {context.zoom.toFixed(1)}x
            </span>
            <Button
              size="icon-sm"
              type="button"
              variant="outline"
              onClick={() => context.zoomBy(0.1)}
            >
              <ZoomInIcon aria-hidden />
            </Button>
          </div>
        )}
      </ImageCropperContext>
      <ImageCropperViewport>
        <ImageCropperImage alt="Mountain" src={IMAGE_CROPPER_SAMPLE} />
        <ImageCropperSelection>
          {imageCropperHandles.map((position) => (
            <ImageCropperHandle key={position} position={position} />
          ))}
          <ImageCropperGrid axis="horizontal" />
          <ImageCropperGrid axis="vertical" />
        </ImageCropperSelection>
      </ImageCropperViewport>
    </ImageCropper>
  </div>
);

export default ImageCropperContextDemo;
