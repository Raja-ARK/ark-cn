import {
  ColorPicker,
  ColorPickerPresetSwatches,
  ColorPickerSwatch,
  ColorPickerSwatchIndicator,
  ColorPickerValueText,
  parseColor,
} from "@/components/ui/color-picker";

const swatches = ["red", "pink", "orange", "purple"] as const;

const defaultParsed = () => parseColor("#eb5e41");

const ColorPickerSwatchOnlyDemo = () => {
  return (
    <ColorPicker inline defaultValue={defaultParsed()}>
      <output className="text-muted-foreground text-xs tabular-nums">
        Selected color: <ColorPickerValueText />
      </output>
      <ColorPickerPresetSwatches
        colors={swatches}
        renderSwatch={(color) => (
          <ColorPickerSwatch value={color}>
            <ColorPickerSwatchIndicator />
          </ColorPickerSwatch>
        )}
      />
    </ColorPicker>
  );
};

export default ColorPickerSwatchOnlyDemo;
