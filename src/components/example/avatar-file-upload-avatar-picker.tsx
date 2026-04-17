import { CameraIcon, XIcon } from "lucide-react";
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

const FileUploadAvatarPickerDemo = () => (
  <FileUpload
    accept={{ "image/png": [".png"], "image/jpeg": [".jpg", ".jpeg"] }}
    className="w-full max-w-xs flex-col items-center gap-4"
    maxFileSize={AVATAR_MAX_BYTES}
    maxFiles={1}
  >
    <FileUploadLabel className="sr-only">Profile photo</FileUploadLabel>
    <div className="relative size-48 shrink-0">
      <FileUploadItemGroup className="absolute inset-0 m-0 gap-0 p-0">
        <FileUploadContext>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUploadItem
                key={`${file.name}-${file.size}`}
                className="relative size-full border-0 bg-transparent p-0 shadow-none"
                file={file}
              >
                <FileUploadItemPreview
                  className="size-full overflow-hidden rounded-full border-0"
                  type="image/*"
                >
                  <FileUploadItemPreviewImage className="size-full max-h-none max-w-none border-0 object-cover" />
                </FileUploadItemPreview>
                <FileUploadItemDeleteTrigger
                  aria-label="Remove photo"
                  className="absolute top-2 right-2 z-10 flex size-8 items-center justify-center rounded-full bg-black/85 text-white shadow-md hover:bg-black/75 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-black/90 dark:hover:bg-black/80 [&_svg]:text-white"
                >
                  <XIcon className="size-4 stroke-[2.5]" />
                </FileUploadItemDeleteTrigger>
              </FileUploadItem>
            ))
          }
        </FileUploadContext>
      </FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) => (
          <FileUploadDropzone
            className={cn(
              "absolute inset-0 flex size-full min-h-0 flex-col items-center justify-center gap-2 rounded-full border-2 border-dashed border-input bg-muted/20 p-3 transition-colors",
              "hover:bg-muted/35 data-dragging:border-primary data-dragging:bg-primary/5",
              acceptedFiles.length > 0 && "pointer-events-none opacity-0",
            )}
          >
            <CameraIcon className="size-10 text-muted-foreground" />
            <span className="px-2 text-center text-muted-foreground text-xs leading-tight">
              Tap or drop image
            </span>
          </FileUploadDropzone>
        )}
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

export default FileUploadAvatarPickerDemo;
