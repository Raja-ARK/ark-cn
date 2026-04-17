import {
  Editable,
  EditableArea,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
} from "@/components/ui/editable";

const EditableInvalidDemo = () => (
  <Editable defaultValue="" invalid placeholder="Required field">
    <EditableLabel>Invalid</EditableLabel>
    <EditableArea>
      <EditableInput />
      <EditablePreview />
    </EditableArea>
    <EditableControl>
      <EditableEditTrigger>Edit</EditableEditTrigger>
    </EditableControl>
  </Editable>
);

export default EditableInvalidDemo;
