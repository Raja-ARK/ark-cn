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

const ImageCropperControlledZoomDemo = () => {
  const [zoom, setZoom] = useState(1);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button
          aria-label="Zoom out"
          variant="outline"
          size="icon-sm"
          onClick={() => {
            setZoom((z) => Math.max(1, z - 0.1));
          }}
        >
          <ZoomOutIcon aria-hidden className="size-4" />
        </Button>
        <span className="min-w-12 text-center font-mono text-muted-foreground text-xs tabular-nums">
          {zoom.toFixed(1)}×
        </span>
        <Button
          aria-label="Zoom in"
          variant="outline"
          size="icon-sm"
          onClick={() => {
            setZoom((z) => Math.min(5, z + 0.1));
          }}
        >
          <ZoomInIcon aria-hidden className="size-4" />
        </Button>
      </div>
      <ImageCropper
        maxZoom={5}
        minZoom={1}
        zoom={zoom}
        onZoomChange={(e) => {
          setZoom(e.zoom);
        }}
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

export default ImageCropperControlledZoomDemo;
