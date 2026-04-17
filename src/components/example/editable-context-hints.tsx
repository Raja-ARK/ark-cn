import {
  Editable,
  EditableArea,
  EditableContext,
  EditableControl,
  EditableEditTrigger,
  EditableInput,
  EditableLabel,
  EditablePreview,
} from "@/components/ui/editable";

const EditableContextHintsDemo = () => (
  <Editable defaultValue="Hello" placeholder="Type…">
    <EditableLabel>Context</EditableLabel>
    <EditableArea>
      <EditableInput />
      <EditablePreview />
    </EditableArea>
    <EditableContext>
      {(ctx) =>
        ctx.editing ? (
          <p className="text-muted-foreground text-xs">
            Enter saves, Esc cancels (with default submit mode).
          </p>
        ) : (
          <EditableControl>
            <EditableEditTrigger>Edit</EditableEditTrigger>
          </EditableControl>
        )
      }
    </EditableContext>
  </Editable>
);

export default EditableContextHintsDemo;
