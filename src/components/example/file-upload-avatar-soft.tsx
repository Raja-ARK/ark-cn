import { ImageIcon, XIcon } from "lucide-react";
import {
  FileUpload,
  FileUploadContext,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSizeText,
  FileUploadLabel,
} from "@/components/ui/file-upload";

const FileUploadAvatarSoftDemo = () => (
  <FileUpload
    accept={{ "image/*": [".png", ".jpg", ".jpeg", ".webp"] }}
    className="max-w-xs"
    maxFiles={1}
  >
    <FileUploadLabel>Portrait (4px radius preview)</FileUploadLabel>
    <FileUploadDropzone className="min-h-24 rounded-lg border-solid">
      <ImageIcon className="size-7 text-muted-foreground" />
      <span className="text-muted-foreground text-xs">
        Square-ish drop target
      </span>
    </FileUploadDropzone>
    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem
              key={`${file.name}-${file.size}`}
              className="border-0 bg-transparent p-0 shadow-none"
              file={file}
            >
              <FileUploadItemPreview type="image/*" className="size-20">
                <FileUploadItemPreviewImage className="" />
              </FileUploadItemPreview>
              <div className="flex min-w-0 flex-1 flex-col justify-center gap-1">
                <FileUploadItemName />
                <FileUploadItemSizeText />
              </div>
              <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
                <XIcon />
              </FileUploadItemDeleteTrigger>
            </FileUploadItem>
          ))
        }
      </FileUploadContext>
    </FileUploadItemGroup>
  </FileUpload>
);

export default FileUploadAvatarSoftDemo;
