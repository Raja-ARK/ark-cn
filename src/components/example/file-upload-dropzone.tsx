import { FileIcon, UploadIcon, XIcon } from "lucide-react";
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

const FileUploadDropzoneDemo = () => (
  <FileUpload className="max-w-md" maxFiles={5}>
    <FileUploadLabel>Dropzone</FileUploadLabel>
    <FileUploadDropzone>
      <UploadIcon className="size-6 text-muted-foreground" />
      <div className="flex flex-col gap-1">
        <span className="font-medium text-sm">Drag and drop files here</span>
        <span className="text-muted-foreground text-xs">
          or click to browse
        </span>
      </div>
    </FileUploadDropzone>
    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
              <FileUploadItemPreview type="image/*">
                <FileUploadItemPreviewImage />
              </FileUploadItemPreview>
              <FileUploadItemPreview type=".*">
                <FileIcon />
              </FileUploadItemPreview>
              <FileUploadItemName />
              <FileUploadItemSizeText />
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

export default FileUploadDropzoneDemo;
