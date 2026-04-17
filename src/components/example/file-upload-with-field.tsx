import { FileTextIcon, XIcon } from "lucide-react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
  FileUpload,
  FileUploadContext,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
} from "@/components/ui/file-upload";

const FileUploadWithFieldDemo = () => (
  <Field className="max-w-md" invalid>
    <FieldLabel>Evidence upload</FieldLabel>
    <FileUpload maxFiles={2} maxFileSize={2000}>
      <FileUploadDropzone className="min-h-28">
        <FileTextIcon className="size-6 text-muted-foreground" />
        <span className="text-muted-foreground text-xs">
          Max 2 files, 2KB each (invalid Field wrapper for demo)
        </span>
      </FileUploadDropzone>
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
    <FieldError>Attach at least one document to continue.</FieldError>
  </Field>
);

export default FileUploadWithFieldDemo;
