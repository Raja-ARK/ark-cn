import {
  ImageCropper,
  ImageCropperGrid,
  ImageCropperImage,
  ImageCropperSelection,
  ImageCropperViewport,
} from "@/components/ui/image-cropper";

const IMAGE_CROPPER_SAMPLE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";

const ImageCropperFixedDemo = () => (
  <ImageCropper className="max-w-md" fixedCropArea>
    <ImageCropperViewport>
      <ImageCropperImage alt="Mountain" src={IMAGE_CROPPER_SAMPLE} />
      <ImageCropperSelection>
        <ImageCropperGrid axis="horizontal" />
        <ImageCropperGrid axis="vertical" />
      </ImageCropperSelection>
    </ImageCropperViewport>
  </ImageCropper>
);

export default ImageCropperFixedDemo;
