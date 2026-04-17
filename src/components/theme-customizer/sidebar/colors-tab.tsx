import { ChevronDownIcon } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import type { ThemeColors } from "../theme-customize-context";
import { useThemeCustomize } from "../theme-customize-context";
import { ColorRow } from "./color-row";
import { PresetPicker } from "./preset-picker";

interface ColorSection {
  title: string;
  keys: { key: keyof ThemeColors; label: string }[];
}

const COLOR_SECTIONS: ColorSection[] = [
  {
    title: "Primary",
    keys: [
      { key: "primary", label: "Primary" },
      { key: "primaryForeground", label: "Primary Foreground" },
    ],
  },
  {
    title: "Secondary",
    keys: [
      { key: "secondary", label: "Secondary" },
      { key: "secondaryForeground", label: "Secondary Foreground" },
    ],
  },
  {
    title: "Accent",
    keys: [
      { key: "accent", label: "Accent" },
      { key: "accentForeground", label: "Accent Foreground" },
    ],
  },
  {
    title: "Base",
    keys: [
      { key: "background", label: "Background" },
      { key: "foreground", label: "Foreground" },
    ],
  },
  {
    title: "Card",
    keys: [
      { key: "card", label: "Card" },
      { key: "cardForeground", label: "Card Foreground" },
    ],
  },
  {
    title: "Popover",
    keys: [
      { key: "popover", label: "Popover" },
      { key: "popoverForeground", label: "Popover Foreground" },
    ],
  },
  {
    title: "Muted",
    keys: [
      { key: "muted", label: "Muted" },
      { key: "mutedForeground", label: "Muted Foreground" },
    ],
  },
  {
    title: "Destructive",
    keys: [
      { key: "destructive", label: "Destructive" },
      { key: "destructiveForeground", label: "Destructive Foreground" },
    ],
  },
  {
    title: "Status",
    keys: [
      { key: "info", label: "Info" },
      { key: "infoForeground", label: "Info Foreground" },
      { key: "success", label: "Success" },
      { key: "successForeground", label: "Success Foreground" },
      { key: "warning", label: "Warning" },
      { key: "warningForeground", label: "Warning Foreground" },
    ],
  },
  {
    title: "Border & Input",
    keys: [
      { key: "border", label: "Border" },
      { key: "input", label: "Input" },
      { key: "ring", label: "Ring" },
    ],
  },
  {
    title: "Chart",
    keys: [
      { key: "chart1", label: "Chart 1" },
      { key: "chart2", label: "Chart 2" },
      { key: "chart3", label: "Chart 3" },
      { key: "chart4", label: "Chart 4" },
      { key: "chart5", label: "Chart 5" },
    ],
  },
  {
    title: "Sidebar",
    keys: [
      { key: "sidebar", label: "Sidebar" },
      { key: "sidebarForeground", label: "Sidebar Foreground" },
      { key: "sidebarPrimary", label: "Sidebar Primary" },
      { key: "sidebarPrimaryForeground", label: "Sidebar Primary FG" },
      { key: "sidebarAccent", label: "Sidebar Accent" },
      { key: "sidebarAccentForeground", label: "Sidebar Accent FG" },
      { key: "sidebarBorder", label: "Sidebar Border" },
      { key: "sidebarRing", label: "Sidebar Ring" },
    ],
  },
];

export const ColorsTab = () => {
  const { previewMode } = useThemeCustomize();
  const [search, setSearch] = useState("");

  const filteredSections = useMemo(() => {
    if (!search.trim()) return COLOR_SECTIONS;
    const q = search.toLowerCase();
    return COLOR_SECTIONS.map((s) => ({
      ...s,
      keys: s.keys.filter((k) => k.label.toLowerCase().includes(q)),
    })).filter((s) => s.keys.length > 0);
  }, [search]);

  return (
    <div className="space-y-3">
      <PresetPicker />
      <Input
        placeholder="Search colors…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="space-y-1">
        {filteredSections.map((section) => (
          <ColorSectionCollapsible
            key={section.title}
            section={section}
            mode={previewMode}
            defaultOpen={
              section.title === "Primary" || section.title === "Secondary"
            }
          />
        ))}
      </div>
    </div>
  );
};

const ColorSectionCollapsible = ({
  section,
  mode,
  defaultOpen,
}: {
  section: ColorSection;
  mode: "light" | "dark";
  defaultOpen: boolean;
}) => {
  return (
    <Collapsible defaultOpen={defaultOpen}>
      <CollapsibleTrigger
        className={cn(
          "flex w-full items-center justify-between rounded-md px-2 py-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground cursor-pointer",
        )}
      >
        {section.title}
        <ChevronDownIcon className="size-3.5 transition-transform in-data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="space-y-1.5 pt-1.5 pb-2">
          {section.keys.map((k) => (
            <ColorRow
              key={k.key}
              label={k.label}
              colorKey={k.key}
              mode={mode}
            />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
