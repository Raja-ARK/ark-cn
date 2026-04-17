import { CropIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ImageCropperGrid,
  ImageCropperHandle,
  ImageCropperImage,
  ImageCropperRootProvider,
  ImageCropperSelection,
  ImageCropperViewport,
  imageCropperHandles,
  useImageCropper,
} from "@/components/ui/image-cropper";

const IMAGE_CROPPER_SAMPLE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";

const ImageCropperCropPreviewDemo = () => {
  const imageCropper = useImageCropper();
  const [preview, setPreview] = useState<string | null>(null);

  const handleCrop = async () => {
    const result = await imageCropper.getCroppedImage({ output: "dataUrl" });
    if (typeof result === "string") {
      setPreview(result);
    }
  };

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Button type="button" variant="default" onClick={handleCrop}>
        <CropIcon aria-hidden />
        Crop Image
      </Button>
      <ImageCropperRootProvider value={imageCropper}>
        <ImageCropperViewport>
          <ImageCropperImage
            alt="Mountain"
            crossOrigin="anonymous"
            src={IMAGE_CROPPER_SAMPLE}
          />
          <ImageCropperSelection>
            {imageCropperHandles.map((position) => (
              <ImageCropperHandle key={position} position={position} />
            ))}
            <ImageCropperGrid axis="horizontal" />
            <ImageCropperGrid axis="vertical" />
          </ImageCropperSelection>
        </ImageCropperViewport>
      </ImageCropperRootProvider>
      <div className="rounded-md border bg-muted/40 p-3">
        <div className="mb-2 text-muted-foreground text-xs uppercase">
          Preview
        </div>
        {preview ? (
          <img
            alt="Cropped preview"
            className="max-h-36 rounded border"
            src={preview}
          />
        ) : (
          <p className="text-muted-foreground text-sm">
            Click "Crop Image" to generate.
          </p>
        )}
      </div>
    </div>
  );
};

export default ImageCropperCropPreviewDemo;
