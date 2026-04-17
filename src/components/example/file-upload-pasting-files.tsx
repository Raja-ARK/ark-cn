import { ClipboardIcon, XIcon } from "lucide-react";
import {
  FileUploadContext,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadItemPreview,
  FileUploadItemPreviewImage,
  FileUploadItemSizeText,
  FileUploadLabel,
  FileUploadRootProvider,
  useFileUpload,
} from "@/components/ui/file-upload";

const FileUploadPastingFilesDemo = () => {
  const fileUpload = useFileUpload({ accept: "image/*", maxFiles: 3 });

  return (
    <FileUploadRootProvider className="max-w-md" value={fileUpload}>
      <FileUploadLabel className="inline-flex items-center gap-2">
        <ClipboardIcon className="size-4" />
        Paste files
      </FileUploadLabel>
      <textarea
        className="min-h-24 w-full rounded-md border bg-background px-3 py-2 text-sm"
        onPaste={(event) => {
          fileUpload.setClipboardFiles(event.clipboardData);
        }}
        placeholder="Paste an image here (Ctrl/Cmd + V)"
      />
      <FileUploadItemGroup>
        <FileUploadContext>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
                <FileUploadItemPreview type="image/*">
                  <FileUploadItemPreviewImage />
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
    </FileUploadRootProvider>
  );
};

export default FileUploadPastingFilesDemo;
