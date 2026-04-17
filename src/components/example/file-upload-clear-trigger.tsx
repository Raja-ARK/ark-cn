import { PaperclipIcon, XIcon } from "lucide-react";
import {
  FileUpload,
  FileUploadClearTrigger,
  FileUploadContext,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadLabel,
  FileUploadTrigger,
} from "@/components/ui/file-upload";

const FileUploadClearTriggerDemo = () => (
  <FileUpload className="max-w-md" maxFiles={5}>
    <FileUploadLabel>Clear trigger</FileUploadLabel>
    <div className="flex flex-wrap gap-2">
      <FileUploadTrigger className="inline-flex items-center gap-2 rounded-md border px-3 py-2 font-medium text-sm transition-colors hover:bg-muted">
        <PaperclipIcon className="size-4" />
        Choose file(s)
      </FileUploadTrigger>
      <FileUploadClearTrigger className="rounded-md px-3 py-2 font-medium text-muted-foreground text-sm transition-colors hover:bg-muted hover:text-foreground">
        Clear files
      </FileUploadClearTrigger>
    </div>
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

export default FileUploadClearTriggerDemo;
