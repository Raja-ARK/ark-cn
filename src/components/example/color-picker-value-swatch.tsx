import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerChannelSlider,
  ColorPickerTriggerSwatch,
  ColorPickerValueText,
  parseColor,
} from "@/components/ui/color-picker";

const defaultParsed = () => parseColor("#eb5e41");

const ColorPickerValueSwatchDemo = () => {
  return (
    <ColorPicker inline defaultValue={defaultParsed()}>
      <ColorPickerArea />
      <div className="flex items-center gap-3">
        <div className="size-9 overflow-hidden rounded-lg border border-input">
          <ColorPickerTriggerSwatch />
        </div>
        <div className="flex flex-1 flex-col gap-2.5">
          <ColorPickerChannelSlider channel="hue" />
          <ColorPickerChannelSlider channel="alpha" />
        </div>
      </div>
      <output className="text-muted-foreground text-xs tabular-nums">
        Current value: <ColorPickerValueText />
      </output>
    </ColorPicker>
  );
};

export default ColorPickerValueSwatchDemo;
