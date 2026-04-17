import { useState } from "react";
import { Button } from "@/components/ui/button";
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

const ColorPickerOpenControlledDemo = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => setOpen((o) => !o)}
      >
        Open Color Picker
      </Button>
      <ColorPicker
        open={open}
        onOpenChange={(d) => setOpen(d.open)}
        defaultValue={defaultParsed()}
      >
        <ColorPickerLabel>Color</ColorPickerLabel>
        <ColorPickerControl>
          <ColorPickerChannelInput channel="hex" />
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

export default ColorPickerOpenControlledDemo;
