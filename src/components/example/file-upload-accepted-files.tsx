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

const FileUploadAcceptedFilesDemo = () => (
  <FileUpload
    accept={{
      "application/pdf": [".pdf"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/png": [".png"],
      "image/webp": [".webp"],
    }}
    className="max-w-md"
    maxFiles={4}
  >
    <FileUploadLabel>Accepted files only</FileUploadLabel>
    <FileUploadDropzone>
      <UploadIcon className="size-6 text-muted-foreground" />
      <span className="text-muted-foreground text-xs">
        PNG, JPG, WEBP, and PDF
      </span>
    </FileUploadDropzone>
    <FileUploadContext>
      {({ rejectedFiles }) =>
        rejectedFiles.length > 0 ? (
          <ul className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-destructive text-xs">
            {rejectedFiles.map((rejectedFile) => (
              <li key={`${rejectedFile.file.name}-${rejectedFile.file.size}`}>
                {rejectedFile.file.name}: {rejectedFile.errors.join(", ")}
              </li>
            ))}
          </ul>
        ) : null
      }
    </FileUploadContext>
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

export default FileUploadAcceptedFilesDemo;
