import { UploadIcon, XIcon } from "lucide-react";
import {
  FileUpload,
  FileUploadContext,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadLabel,
} from "@/components/ui/file-upload";

const FileUploadRejectedDemo = () => (
  <FileUpload className="max-w-md" maxFileSize={500} maxFiles={2}>
    <FileUploadLabel>Rejections (&lt; 500 bytes)</FileUploadLabel>
    <FileUploadDropzone>
      <UploadIcon className="size-6 text-muted-foreground" />
      <span className="text-muted-foreground text-xs">
        Try a large file to see rejectedFiles
      </span>
    </FileUploadDropzone>
    <FileUploadContext>
      {({ rejectedFiles }) =>
        rejectedFiles.length > 0 ? (
          <ul className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-destructive text-xs">
            {rejectedFiles.map((rej) => (
              <li key={`${rej.file.name}-${rej.file.size}`}>
                {rej.file.name}: {rej.errors.join(", ")}
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
              <FileUploadItemName />
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

export default FileUploadRejectedDemo;
