import { ChevronsUpDownIcon, SearchIcon } from "lucide-react";
import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
} from "@/components/ui/combobox";
import { cn } from "@/lib/utils";
import { useThemeCustomize } from "../theme-customize-context";
import { themePresets } from "../theme-presets";

export const PresetPicker = () => {
  const { selectedPreset, selectPreset, previewMode } = useThemeCustomize();
  const items = useMemo(
    () =>
      themePresets.map((preset) => ({
        label: preset.label,
        value: preset.name,
      })),
    [],
  );

  const currentPreset = themePresets.find((p) => p.name === selectedPreset);

  return (
    <Combobox
      closeOnSelect
      items={items}
      openOnClick
      selectionBehavior="clear"
      value={currentPreset ? [currentPreset.name] : []}
      onValueChange={(details) => {
        const nextPreset = details.value[0];
        if (nextPreset) {
          selectPreset(nextPreset);
        }
      }}
      className="w-full"
    >
      <ComboboxControl className="w-full">
        <ComboboxTrigger asChild>
          <Button
            className="font-normal w-full justify-start"
            type="button"
            variant="outline"
          >
            {currentPreset ? (
              <>
                <span className="flex gap-0.5">
                  {currentPreset.previewColors.map((c) => (
                    <span
                      key={c}
                      className="size-3 rounded-full border border-border/50"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </span>
                <ComboboxValue
                  className="truncate flex-1 text-start"
                  placeholder="Select preset…"
                />
              </>
            ) : (
              <span className="text-muted-foreground flex-1 text-start">
                {selectedPreset === "custom" ? "Custom" : "Select preset…"}
              </span>
            )}
            <ChevronsUpDownIcon className="opacity-60" />
          </Button>
        </ComboboxTrigger>
      </ComboboxControl>
      <ComboboxPopup aria-label="Select fruit" className="relative">
        <div className="border-b p-2">
          <ComboboxInput
            aria-label="Select a fruit"
            placeholder="Select a fruit…"
            showClear={false}
            showIndicator={false}
            startAddon={<SearchIcon className="size-3" />}
          />
        </div>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
        <ComboboxList items={items} className="max-h-64 overflow-y-auto p-1">
          {(item) => {
            const preset = themePresets.find(
              (entry) => entry.name === item.value,
            );
            if (!preset) return null;
            const colors = previewMode === "dark" ? preset.dark : preset.light;
            return (
              <ComboboxItem
                key={preset.name}
                item={item}
                className={cn(
                  "flex items-center gap-2 rounded-md px-2 py-1.5 text-sm",
                  selectedPreset === preset.name &&
                    "bg-accent text-accent-foreground",
                )}
              >
                <span className="flex gap-0.5 shrink-0">
                  {[
                    colors.primary,
                    colors.secondary,
                    colors.background,
                    colors.border,
                  ].map((c, i) => (
                    <span
                      key={`${preset.name}-${i}`}
                      className="size-3 rounded-full border border-border/50"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </span>
                <ComboboxItemText className="text-start">
                  {preset.label}
                </ComboboxItemText>

                <ComboboxItemIndicator />
              </ComboboxItem>
            );
          }}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
}
