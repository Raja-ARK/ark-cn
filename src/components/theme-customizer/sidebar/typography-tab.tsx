import {
  Select,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectPopup,
  SelectTriggerField,
  SelectValue,
} from "@/components/ui/select";
import {
  Slider,
  SliderContext,
  SliderField,
  SliderLabel,
} from "@/components/ui/slider";
import { useThemeCustomize } from "../theme-customize-context";

const FONT_SANS_OPTIONS = [
  { label: "Geist", value: "Geist, sans-serif" },
  { label: "System UI", value: "system-ui, sans-serif" },
  { label: "Arial", value: "Arial, sans-serif" },
  { label: "Georgia", value: "Georgia, serif" },
  { label: "Times New Roman", value: "'Times New Roman', serif" },
  { label: "Courier New", value: "'Courier New', monospace" },
  { label: "Roboto", value: "Roboto, sans-serif" },
];


export const TypographyTab = () => {
  const { config, updateTypography } = useThemeCustomize();
  const { typography } = config;

  return (
    <div className="space-y-5">
      <div className="space-y-1.5">
        <label className="font-medium text-sm text-foreground">
          Preview Font
        </label>
        <Select
          items={FONT_SANS_OPTIONS}
          value={[typography.fontSans]}
          onValueChange={(d) => {
            if (!d.value[0]) return;
            updateTypography("fontSans", d.value[0]);
            updateTypography("fontSerif", d.value[0]);
            updateTypography("fontMono", d.value[0]);
          }}
        >
          <SelectTriggerField >
            <SelectValue placeholder="Select font…" />
          </SelectTriggerField>
          <SelectPopup>
            {FONT_SANS_OPTIONS.map((opt) => (
              <SelectItem key={opt.value} item={opt}>
                <SelectItemText>{opt.label}</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
            ))}
          </SelectPopup>
        </Select>
      </div>

      {/* Letter Spacing */}
      <Slider
        min={-0.05}
        max={0.15}
        step={0.005}
        value={Number.parseFloat(typography.letterSpacing) || 0}
        onValueChange={(d) => {
          updateTypography("letterSpacing", `${d.value[0]}em`);
        }}
      >
        <div className="flex items-center justify-between">
          <SliderLabel>Letter Spacing</SliderLabel>
          <SliderContext>
            {(api) => (
              <span className="font-variant-numeric text-foreground text-sm tabular-nums">
                {api.value[0]}em
              </span>
            )}
          </SliderContext>
        </div>
        <SliderField />
      </Slider>
    </div>
  );
}
