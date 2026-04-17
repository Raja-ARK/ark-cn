import {
  Editable,
  EditableArea,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
} from "@/components/ui/editable";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

const FieldEditableInvalidDemo = () => (
  <Field className="max-w-xs" invalid>
    <FieldLabel>Project slug</FieldLabel>
    <Editable invalid placeholder="lowercase-hyphen-only">
      <EditableArea>
        <EditableInput />
        <EditablePreview />
      </EditableArea>
      <EditableControl>
        <EditableEditTrigger>Edit</EditableEditTrigger>
      </EditableControl>
    </Editable>
    <FieldError>Use lowercase letters, numbers, and hyphens only.</FieldError>
  </Field>
);

export default FieldEditableInvalidDemo;
