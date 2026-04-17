import { useState } from "react";
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

const ImageCropperEventsDemo = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <ImageCropper
        className="max-w-md"
        onCropChange={(event) => setCrop(event.crop)}
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
      <div className="grid grid-cols-3 gap-2 rounded-md border bg-muted/40 p-2 text-xs">
        <div className="space-y-1">
          <div className="text-muted-foreground">Zoom</div>
          <div className="font-mono">{zoom.toFixed(2)}x</div>
        </div>
        <div className="space-y-1">
          <div className="text-muted-foreground">Position</div>
          <div className="font-mono">
            {Math.round(crop.x)}, {Math.round(crop.y)}
          </div>
        </div>
        <div className="space-y-1">
          <div className="text-muted-foreground">Size</div>
          <div className="font-mono">
            {Math.round(crop.width)} x {Math.round(crop.height)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCropperEventsDemo;
