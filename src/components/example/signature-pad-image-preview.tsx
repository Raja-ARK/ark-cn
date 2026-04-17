import { useState } from "react";
import {
  SignaturePad,
  SignaturePadField,
  SignaturePadLabel,
} from "@/components/ui/signature-pad";

const SignaturePadImagePreviewDemo = () => {
  const [imageUrl, setImageUrl] = useState("");
  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <SignaturePad
        onDrawEnd={(details) => {
          void details.getDataUrl("image/png").then((url) => setImageUrl(url));
        }}
        className="w-full max-w-md"
      >
        <SignaturePadLabel>Sign below</SignaturePadLabel>
        <SignaturePadField />
      </SignaturePad>
      <div className="flex flex-col gap-1">
        <span className="text-muted-foreground text-xs">Image preview</span>
        {imageUrl ? (
          <img
            alt="Signature preview"
            className="max-h-40 w-full max-w-full rounded-md border border-border bg-white p-2 object-contain dark:bg-white"
            height={160}
            src={imageUrl}
            width={320}
          />
        ) : (
          <p className="text-muted-foreground text-xs">
            Draw to update preview.
          </p>
        )}
      </div>
    </div>
  );
};

export default SignaturePadImagePreviewDemo;
