import { FlipHorizontalIcon, FlipVerticalIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ImageCropper,
  type ImageCropperFlipState,
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperSelection,
  ImageCropperViewport,
  imageCropperHandles,
} from "@/components/ui/image-cropper";

const IMAGE_CROPPER_SAMPLE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";

const ImageCropperFlipDemo = () => {
  const [flip, setFlip] = useState<ImageCropperFlipState>({
    horizontal: false,
    vertical: false,
  });

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          type="button"
          variant={flip.horizontal ? "default" : "outline"}
          onClick={() =>
            setFlip((prev) => ({ ...prev, horizontal: !prev.horizontal }))
          }
        >
          <FlipHorizontalIcon aria-hidden />
          Horizontal
        </Button>
        <Button
          size="sm"
          type="button"
          variant={flip.vertical ? "default" : "outline"}
          onClick={() =>
            setFlip((prev) => ({ ...prev, vertical: !prev.vertical }))
          }
        >
          <FlipVerticalIcon aria-hidden />
          Vertical
        </Button>
      </div>
      <ImageCropper
        className="max-w-md"
        flip={flip}
        onFlipChange={(event) => setFlip(event.flip)}
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

export default ImageCropperFlipDemo;
