import {
  Editable,
  EditableArea,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
} from "@/components/ui/editable";

const EditableBasicDemo = () => (
  <Editable defaultValue="Hello World" placeholder="Enter text…">
    <EditableLabel>Label</EditableLabel>
    <EditableArea>
      <EditableInput />
      <EditablePreview />
    </EditableArea>
    <EditableControl>
      <EditableEditTrigger>Edit</EditableEditTrigger>
    </EditableControl>
  </Editable>
);

export default EditableBasicDemo;
