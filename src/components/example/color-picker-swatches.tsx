import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerChannelInput,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerHueAlphaSliders,
  ColorPickerLabel,
  ColorPickerPositioner,
  ColorPickerPresetSwatches,
  ColorPickerTrigger,
  parseColor,
} from "@/components/ui/color-picker";

const swatches = ["red", "blue", "green", "orange"] as const;

const defaultParsed = () => parseColor("#eb5e41");

const ColorPickerSwatchesDemo = () => {
  return (
    <ColorPicker defaultValue={defaultParsed()}>
      <ColorPickerLabel>Color</ColorPickerLabel>
      <ColorPickerControl>
        <ColorPickerChannelInput channel="hex" />
        <ColorPickerChannelInput channel="alpha" />
        <ColorPickerTrigger />
      </ColorPickerControl>
      <ColorPickerPositioner>
        <ColorPickerContent>
          <ColorPickerArea />
          <ColorPickerHueAlphaSliders />
          <ColorPickerPresetSwatches colors={swatches} />
        </ColorPickerContent>
      </ColorPickerPositioner>
    </ColorPicker>
  );
};

export default ColorPickerSwatchesDemo;
