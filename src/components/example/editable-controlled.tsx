import { useState } from "react";
import {
  Editable,
  EditableArea,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
} from "@/components/ui/editable";

const EditableControlledDemo = () => {
  const [value, setValue] = useState("Controlled value");

  return (
    <Editable
      placeholder="Enter text…"
      value={value}
      onValueChange={(e) => {
        setValue(e.value);
      }}
    >
      <EditableLabel>Controlled</EditableLabel>
      <EditableArea>
        <EditableInput />
        <EditablePreview />
      </EditableArea>
      <EditableControl>
        <EditableEditTrigger>Edit</EditableEditTrigger>
      </EditableControl>
      <p className="text-muted-foreground text-xs tabular-nums">
        Live: {value || "∅"}
      </p>
    </Editable>
  );
};

export default EditableControlledDemo;
