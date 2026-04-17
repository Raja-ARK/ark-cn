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

const ImageCropperBasicDemo = () => (
  <ImageCropper className="max-w-md">
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
);

export default ImageCropperBasicDemo;
