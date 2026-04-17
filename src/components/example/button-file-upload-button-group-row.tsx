import { PaperclipIcon, XIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import {
  FileUpload,
  FileUploadClearTrigger,
  FileUploadContext,
  FileUploadLabel,
  FileUploadTrigger,
} from "@/components/ui/file-upload";

const FileUploadButtonGroupRowDemo = () => (
  <FileUpload className="max-w-lg" invalid>
    <FileUploadLabel>Input-style row + ButtonGroup</FileUploadLabel>
    <ButtonGroup className="w-full max-w-md truncate" invalid>
      <FileUploadContext>
        {({ acceptedFiles }) => {
          return (
            <>
              <FileUploadTrigger asChild>
                <Button
                  variant="outline"
                  className="max-w-full flex-1 truncate block text-start"
                >
                  {acceptedFiles.length > 0
                    ? acceptedFiles.map((f) => f.name).join(", ")
                    : "No file chosen"}
                </Button>
              </FileUploadTrigger>
              {acceptedFiles.length > 0 && <ButtonGroupSeparator />}
              <FileUploadClearTrigger asChild>
                <Button variant="outline">
                  <XIcon />
                </Button>
              </FileUploadClearTrigger>
              <ButtonGroupSeparator />
              <FileUploadTrigger asChild>
                <Button variant="outline">
                  <PaperclipIcon />
                </Button>
              </FileUploadTrigger>
            </>
          );
        }}
      </FileUploadContext>
    </ButtonGroup>
    {/* <FileUploadItemGroup className="mt-2">
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.map((file) => (
            <FileUploadItem key={`${file.name}-${file.size}`} file={file}>
              <FileUploadItemPreview type="image/*">
                <FileUploadItemPreviewImage className="size-9" />
              </FileUploadItemPreview>
              <FileUploadItemPreview type=".*">
                <FileTextIcon className="size-4" />
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
    </FileUploadItemGroup> */}
  </FileUpload>
);

export default FileUploadButtonGroupRowDemo;
