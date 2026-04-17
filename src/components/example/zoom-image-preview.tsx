import { ZoomImage } from "@/components/ui/zoom-image";

const IMAGE_CROPPER_SAMPLE =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800";

const ZoomImagePreviewDemo = () => (
  <ZoomImage
    alt="Mountain"
    className="max-w-md"
    maxZoom={4}
    minZoom={1}
    src={IMAGE_CROPPER_SAMPLE}
  />
);

export default ZoomImagePreviewDemo;
