import { FileTextIcon, XIcon } from "lucide-react";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  FileUpload,
  FileUploadContext,
  FileUploadDropzone,
  FileUploadItem,
  FileUploadItemDeleteTrigger,
  FileUploadItemGroup,
  FileUploadItemName,
} from "@/components/ui/file-upload";

const FieldFileUploadNormalDemo = () => (
  <Field className="max-w-md">
    <FieldLabel>Resume</FieldLabel>
    <FileUpload accept={["application/pdf"]} maxFiles={1}>
      <FileUploadDropzone className="min-h-24">
        <FileTextIcon className="size-5 text-muted-foreground" />
        <span className="text-muted-foreground text-xs">
          Drop a PDF file or click to browse
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
    <FieldDescription>Supported format: PDF (max 1 file).</FieldDescription>
  </Field>
);

export default FieldFileUploadNormalDemo;
