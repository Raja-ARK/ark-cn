import { RotateCcwIcon, RotateCwIcon } from "lucide-react";
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

const ImageCropperRotationDemo = () => {
  const [rotation, setRotation] = useState(0);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button
          size="icon-sm"
          type="button"
          variant="outline"
          onClick={() => setRotation((prev) => prev - 90)}
        >
          <RotateCcwIcon aria-hidden />
        </Button>
        <Button
          size="icon-sm"
          type="button"
          variant="outline"
          onClick={() => setRotation((prev) => prev + 90)}
        >
          <RotateCwIcon aria-hidden />
        </Button>
        <span className="font-mono text-muted-foreground text-sm tabular-nums">
          {rotation}°
        </span>
      </div>
      <ImageCropper
        className="max-w-md"
        rotation={rotation}
        onRotationChange={(event) => setRotation(event.rotation)}
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

export default ImageCropperRotationDemo;
