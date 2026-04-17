import {
  ColorPicker,
  ColorPickerChannelSliderRow,
  ColorPickerTriggerSwatch,
  ColorPickerValueText,
  parseColor,
} from "@/components/ui/color-picker";

const defaultParsed = () => parseColor("#5dd016");

const ColorPickerSliderOnlyDemo = () => {
  return (
    <ColorPicker inline defaultValue={defaultParsed()}>
      <div className="flex items-center gap-3">
        <div className="size-9 overflow-hidden rounded-lg border border-input">
          <ColorPickerTriggerSwatch />
        </div>
        <ColorPickerValueText className="text-muted-foreground text-xs tabular-nums" />
      </div>

      <div className="flex flex-col gap-2">
        <ColorPickerChannelSliderRow channel="red" label="R" />
        <ColorPickerChannelSliderRow channel="green" label="G" />
        <ColorPickerChannelSliderRow channel="blue" label="B" />
      </div>
    </ColorPicker>
  );
};

export default ColorPickerSliderOnlyDemo;
