import {
  Editable,
  EditableArea,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditablePreview,
} from "@/components/ui/editable";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

const FieldEditableNormalDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel>Display name</FieldLabel>
    <Editable defaultValue="Ark CN" placeholder="Enter your display name">
      <EditableArea>
        <EditableInput />
        <EditablePreview />
      </EditableArea>
      <EditableControl>
        <EditableEditTrigger>Edit</EditableEditTrigger>
      </EditableControl>
    </Editable>
    <FieldDescription>
      Click edit to update your public profile name.
    </FieldDescription>
  </Field>
);

export default FieldEditableNormalDemo;
