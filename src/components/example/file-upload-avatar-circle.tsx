import { UserRoundIcon, XIcon } from "lucide-react";
import {
  FileUpload,
  FileUploadContext,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadLabel,
} from "@/components/ui/file-upload";
import { cn } from "@/lib/utils";

const AVATAR_MAX_BYTES = 2 * 1024 * 1024;

const FileUploadAvatarCircleDemo = () => (
  <FileUpload
    accept={{ "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"] }}
    className="w-full max-w-xs flex-col items-center gap-4"
    maxFileSize={AVATAR_MAX_BYTES}
    maxFiles={1}
  >
    <FileUploadLabel className="sr-only">Avatar photo</FileUploadLabel>
    <div className="relative size-48 shrink-0">
      <FileUploadContext>
        {({ acceptedFiles }) => {
          if (acceptedFiles.length <= 0) {
            return (
              <FileUploadDropzone
                className={cn(
                  "cursor-pointer flex size-48 flex-col items-center justify-center gap-2 rounded-full border-2 border-dashed border-input bg-muted/20 p-4 transition-colors",
                  "hover:bg-muted/35 data-dragging:border-primary data-dragging:bg-primary/5",
                )}
              >
                <UserRoundIcon className="size-12 text-muted-foreground" />
                <span className="px-2 text-center text-muted-foreground text-xs leading-tight">
                  Tap or drop image
                </span>
              </FileUploadDropzone>
            );
          }

          return (
            <FileUploadItemGroup
              className={cn(
                "absolute inset-0 m-0 flex items-center justify-center p-0",
              )}
            >
              {acceptedFiles.map((file) => (
                <FileUploadItem
                  key={`${file.name}-${file.size}`}
                  className="relative size-full max-h-48 max-w-48 border-0 bg-transparent p-0 shadow-none"
                  file={file}
                >
                  <FileUploadItemPreview
                    className="size-full overflow-hidden rounded-full border-0"
                    type="image/*"
                  >
                    <FileUploadItemPreviewImage className="size-full max-h-none max-w-none border-0 object-cover" />
                  </FileUploadItemPreview>
                  <FileUploadItemDeleteTrigger
                    aria-label={`Remove ${file.name}`}
                    className="absolute top-5 right-3 z-10 rounded-full bg-background p-1 hover:bg-muted"
                  >
                    <XIcon className="stroke-[2.5]" />
                  </FileUploadItemDeleteTrigger>
                </FileUploadItem>
              ))}
            </FileUploadItemGroup>
          );
        }}
      </FileUploadContext>
    </div>
    <FileUploadContext>
      {({ acceptedFiles }) => (
        <div className="flex flex-col items-center gap-1 text-center">
          <p className="font-semibold text-base text-foreground leading-tight">
            {acceptedFiles.length > 0 ? "Avatar uploaded" : "Add your avatar"}
          </p>
          <p className="text-muted-foreground text-sm leading-snug">
            PNG, JPG up to 2MB
          </p>
        </div>
      )}
    </FileUploadContext>
  </FileUpload>
);

export default FileUploadAvatarCircleDemo;
