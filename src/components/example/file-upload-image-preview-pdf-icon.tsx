import { FileIcon, FileTextIcon, UploadIcon, XIcon } from "lucide-react";
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

const FileUploadImagePreviewPdfIconDemo = () => (
  <FileUpload className="max-w-md" maxFiles={5}>
    <FileUploadLabel>Image preview with PDF icon</FileUploadLabel>
    <FileUploadDropzone>
      <UploadIcon className="size-6 text-muted-foreground" />
      <span className="text-muted-foreground text-xs">
        Upload images or PDF files
      </span>
    </FileUploadDropzone>
    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
              <FileUploadItemPreview type="image/*">
                <FileUploadItemPreviewImage />
              </FileUploadItemPreview>
              <FileUploadItemPreview type="application/pdf">
                <FileTextIcon className="text-rose-600" />
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

export default FileUploadImagePreviewPdfIconDemo;
