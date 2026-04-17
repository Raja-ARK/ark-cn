import { ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ImageCropper,
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperSelection,
  ImageCropperViewport,
  imageCropperHandles,
} from "@/components/ui/image-cropper";

const IMAGE_CROPPER_SAMPLE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";

const minZoom = 0.5;
const maxZoom = 2;

const ImageCropperZoomLimitsDemo = () => {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button
          size="icon-sm"
          type="button"
          variant="outline"
          onClick={() => setZoom((prev) => Math.max(minZoom, prev - 0.1))}
        >
          <ZoomOutIcon aria-hidden />
        </Button>
        <span className="min-w-12 text-center font-mono text-muted-foreground text-xs tabular-nums">
          {zoom.toFixed(1)}x
        </span>
        <Button
          size="icon-sm"
          type="button"
          variant="outline"
          onClick={() => setZoom((prev) => Math.min(maxZoom, prev + 0.1))}
        >
          <ZoomInIcon aria-hidden />
        </Button>
      </div>
      <p className="text-muted-foreground text-sm">
        Zoom constrained between {minZoom}x and {maxZoom}x.
      </p>
      <ImageCropper
        className="max-w-md"
        maxZoom={maxZoom}
        minZoom={minZoom}
        zoom={zoom}
        onZoomChange={(event) => setZoom(event.zoom)}
      >
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
};

export default ImageCropperZoomLimitsDemo;
