import { RotateCcwIcon } from "lucide-react";
import { useEffect, useState } from "react";
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
  ColorPickerPresetSwatches,
  ColorPickerTrigger,
  parseColor,
} from "@/components/ui/color-picker";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";
import { convertColor } from "../color-utils";
import {
  type ColorMode,
  type ThemeColors,
  useThemeCustomize,
} from "../theme-customize-context";

interface ColorRowProps {
  label: string;
  colorKey: keyof ThemeColors;
  mode: ColorMode;
}
const swatches = ["red", "blue", "green", "orange"] as const;

export const ColorRow = ({ label, colorKey, mode }: ColorRowProps) => {
  const { config, updateColor, resetColor } = useThemeCustomize();
  const value = config.colors[mode][colorKey];
  const [pickerValue, setPickerValue] = useState(convertColor(value, "rgb"));

  useEffect(() => {
    setPickerValue(convertColor(value, "rgb"));
  }, [value]);

  const parsedValue = (() => {
    try {
      return parseColor(pickerValue);
    } catch {
      return parseColor(convertColor(value, "hex"));
    }
  })();

  return (
    <ColorPicker
      value={parsedValue}
      onValueChange={(details) => {
        // Keep an alpha-capable live value so hue/alpha dragging stays responsive.
        setPickerValue(details.value.toString("rgba"));
      }}
      onValueChangeEnd={(details) => {
        setPickerValue(details.value.toString("rgba"));
        updateColor(mode, colorKey, details.value.toString("rgba"));
      }}
      className="group/row space-y-1.5 rounded-md p-1 w-full max-w-full"
    >
      <div className="flex items-center justify-between">
        <ColorPickerLabel>{label}</ColorPickerLabel>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon-xs"
              className="opacity-0 group-hover/row:opacity-100 transition-opacity shrink-0"
              onClick={() => resetColor(mode, colorKey)}
              aria-label={`Reset ${label}`}
            >
              <RotateCcwIcon className="size-3" />
            </Button>
          </TooltipTrigger>
          <TooltipPopup>Reset to preset default</TooltipPopup>
        </Tooltip>
      </div>
      <ColorPickerControl>
        <ColorPickerTrigger />
        <ColorPickerChannelInput channel="hex" />
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
