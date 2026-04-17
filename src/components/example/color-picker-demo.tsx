import {
  ColorPicker,
  ColorPickerArea,
  ColorPickerChannelInput,
  ColorPickerHueAlphaSliders,
  ColorPickerView,
  parseColor,
} from "@/components/ui/color-picker";

const defaultParsed = () => parseColor("#eb5e41");

const ColorPickerFormDemo = () => {
  return (
    <ColorPicker inline name="accent" defaultValue={defaultParsed()}>
      <ColorPickerArea />
      <ColorPickerHueAlphaSliders />
      <ColorPickerView format="hsla">
        <div className="flex flex-wrap gap-2">
          <ColorPickerChannelInput channel="hue" />
          <ColorPickerChannelInput channel="saturation" />
          <ColorPickerChannelInput channel="lightness" />
        </div>
      </ColorPickerView>
    </ColorPicker>
  );
};

export default ColorPickerFormDemo;
