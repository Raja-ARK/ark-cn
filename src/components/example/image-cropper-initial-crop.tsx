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

const ImageCropperInitialCropDemo = () => (
  <div className="flex w-full max-w-md flex-col gap-2">
    <p className="text-muted-foreground text-sm">
      Starts with a pre-defined crop area.
    </p>
    <ImageCropper
      className="max-w-md"
      initialCrop={{ x: 50, y: 30, width: 200, height: 120 }}
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

export default ImageCropperInitialCropDemo;
