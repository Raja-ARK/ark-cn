import { Code2Icon, GlobeIcon, LayersIcon, ZapIcon } from "lucide-react";
import {
  Select,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectTriggerField,
  SelectValue,
} from "@/components/ui/select";

const iconOptions = [
  { icon: LayersIcon, label: "Components", value: "components" },
  { icon: ZapIcon, label: "Performance", value: "performance" },
  { icon: GlobeIcon, label: "Network", value: "network" },
  { icon: Code2Icon, label: "Development", value: "development" },
] as const;

const SelectOptionsWithIconDemo = () => (
  <div className="w-full max-w-xs">
    <Select
      aria-label="Categories"
      defaultValue={[iconOptions[0].value]}
      items={iconOptions}
    >
      <SelectTriggerField>
        <SelectValue>
          {(api) => {
            const item = api.selectedItems[0] as
              | (typeof iconOptions)[number]
              | undefined;
            if (!item) {
              return "Select…";
            }
            const Icon = item.icon;
            return (
              <span className="flex min-w-0 items-center gap-2">
                <Icon className="size-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </span>
            );
          }}
        </SelectValue>
      </SelectTriggerField>
      <SelectPopup>
        <SelectList>
          {iconOptions.map((item) => (
            <SelectItem key={item.value} item={item}>
              <span className="flex flex-1 items-center gap-2">
                <item.icon className="size-4 shrink-0" />
                <SelectItemText>{item.label}</SelectItemText>
              </span>
              <SelectItemIndicator />
            </SelectItem>
          ))}
        </SelectList>
      </SelectPopup>
    </Select>
  </div>
);

export default SelectOptionsWithIconDemo;
