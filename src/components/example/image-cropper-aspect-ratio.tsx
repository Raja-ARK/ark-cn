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

const ImageCropperAspectRatioDemo = () => (
  <ImageCropper aspectRatio={1} className="max-w-xs">
    <ImageCropperViewport className="aspect-square max-h-80">
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
);

export default ImageCropperAspectRatioDemo;
