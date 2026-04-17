import { useState } from "react";
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

const ColorPickerControlledDemo = () => {
  const [value, setValue] = useState(() => parseColor("hsl(20, 100%, 50%)"));
  return (
    <div className="flex flex-col gap-2">
      <output className="text-muted-foreground text-xs tabular-nums">
        {value.toString("hex")}
      </output>
      <ColorPicker value={value} onValueChange={(d) => setValue(d.value)}>
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
    </div>
  );
};

export default ColorPickerControlledDemo;
