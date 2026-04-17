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

const FieldFileUploadInvalidDemo = () => (
  <Field className="max-w-md" invalid>
    <FieldLabel>Verification document</FieldLabel>
    <FileUpload accept={["application/pdf"]} invalid maxFiles={1}>
      <FileUploadDropzone className="min-h-24">
        <FileTextIcon className="size-5 text-muted-foreground" />
        <span className="text-muted-foreground text-xs">
          Only signed PDF files are accepted
        </span>
      </FileUploadDropzone>
      <FileUploadItemGroup>
        <FileUploadContext>
          {({ acceptedFiles }) =>
            acceptedFiles.map((file) => (
              <FileUploadItem file={file} key={`${file.name}-${file.size}`}>
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
    <FieldError>Please upload a signed PDF document.</FieldError>
  </Field>
);

export default FieldFileUploadInvalidDemo;
