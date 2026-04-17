import { XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
  FileUploadLabel,
  FileUploadRootProvider,
  useFileUpload,
} from "@/components/ui/file-upload";

const FileUploadRootProviderDemo = () => {
  const fileUpload = useFileUpload({ maxFiles: 3 });

  return (
    <FileUploadRootProvider className="max-w-md items-start" value={fileUpload}>
      <FileUploadLabel>RootProvider + useFileUpload</FileUploadLabel>
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          type="button"
          variant="outline"
          onClick={() => {
            fileUpload.openFilePicker();
          }}
        >
          Open picker
        </Button>
        <Button
          size="sm"
          type="button"
          variant="secondary"
          onClick={() => {
            fileUpload.clearFiles();
          }}
        >
          Clear files
        </Button>
      </div>
      <p className="text-muted-foreground text-xs">
        {fileUpload.acceptedFiles.length} accepted · dragging:{" "}
        {fileUpload.dragging ? "yes" : "no"}
      </p>
      <FileUploadItemGroup>
        {fileUpload.acceptedFiles.map((file) => (
          <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
            <FileUploadItemName />
            <FileUploadItemDeleteTrigger aria-label={`Remove ${file.name}`}>
              <XIcon />
            </FileUploadItemDeleteTrigger>
          </FileUploadItem>
        ))}
      </FileUploadItemGroup>
    </FileUploadRootProvider>
  );
};

export default FileUploadRootProviderDemo;
