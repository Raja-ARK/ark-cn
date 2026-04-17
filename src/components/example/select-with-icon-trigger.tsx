import { CableIcon } from "lucide-react";
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

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
] as const;

const SelectWithIconTriggerDemo = () => (
  <div className="w-full max-w-xs">
    <Select aria-label="With icon" defaultValue={["next"]} items={frameworks}>
      <SelectTriggerField>
        <CableIcon aria-hidden className="size-4 shrink-0 opacity-80" />
        <SelectValue placeholder="Framework" />
      </SelectTriggerField>
      <SelectPopup>
        <SelectList>
          {frameworks.map((item) => (
            <SelectItem key={item.value} item={item}>
              <SelectItemText>{item.label}</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
          ))}
        </SelectList>
      </SelectPopup>
    </Select>
  </div>
);

export default SelectWithIconTriggerDemo;
