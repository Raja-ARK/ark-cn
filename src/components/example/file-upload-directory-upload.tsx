import { FileIcon, FolderIcon, XIcon } from "lucide-react";
import {
  FileUpload,
  FileUploadContext,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemSizeText,
  FileUploadLabel,
  FileUploadTrigger,
} from "@/components/ui/file-upload";

const FileUploadDirectoryUploadDemo = () => (
  <FileUpload className="max-w-md" directory>
    <FileUploadLabel>Directory upload</FileUploadLabel>
    <FileUploadTrigger className="inline-flex items-center gap-2 rounded-md border px-3 py-2 font-medium text-sm transition-colors hover:bg-muted">
      <FolderIcon className="size-4" />
      Select folder
    </FileUploadTrigger>
    <FileUploadItemGroup>
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem
              key={`${file.webkitRelativePath}-${file.size}`}
              file={file}
            >
              <FileIcon className="size-4 shrink-0 text-muted-foreground" />
              <FileUploadItemName>
                {file.webkitRelativePath || file.name}
              </FileUploadItemName>
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

export default FileUploadDirectoryUploadDemo;
