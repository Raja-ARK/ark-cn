import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerChannelInput,
  ColorPickerContent,
  ColorPickerControl,
  ColorPickerHueAlphaSliders,
  ColorPickerLabel,
  ColorPickerPositioner,
  ColorPickerTrigger,
  parseColor,
} from "@/components/ui/color-picker";

const defaultParsed = () => parseColor("#eb5e41");

const ColorPickerBasicDemo = () => (
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
      </ColorPickerContent>
    </ColorPickerPositioner>
  </ColorPicker>
);

export default ColorPickerBasicDemo;
