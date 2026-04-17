import {
  Editable,
  EditableArea,
  EditableCancelTrigger,
  EditableContext,
  EditableControl,
  EditableInput,
  EditableLabel,
  EditablePreview,
  EditableSubmitTrigger,
} from "@/components/ui/editable";

const EditableTextareaDemo = () => (
  <Editable
    activationMode="dblclick"
    autoResize
    defaultValue="Ark UI editable with a textarea."
    placeholder="Enter a description…"
    submitMode="none"
  >
    <EditableLabel>Textarea</EditableLabel>
    <EditableArea>
      <EditableInput
        asChild
        className="leading-relaxed data-autoresize:wrap-break-word"
      >
        <textarea />
      </EditableInput>
      <EditablePreview className="leading-relaxed" />
    </EditableArea>
    <EditableContext>
      {(ctx) =>
        ctx.editing ? (
          <>
            <p className="text-muted-foreground text-xs">
              ⌘ Enter (macOS) or Ctrl+Enter to save
            </p>
            <EditableControl>
              <EditableSubmitTrigger>Save</EditableSubmitTrigger>
              <EditableCancelTrigger>Cancel</EditableCancelTrigger>
            </EditableControl>
          </>
        ) : null
      }
    </EditableContext>
  </Editable>
);

export default EditableTextareaDemo;
