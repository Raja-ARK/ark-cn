import { useState } from "react";
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

const SelectControlled = () => {
  const [value, setValue] = useState<string[]>(["vite"]);

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-muted-foreground text-xs">
        value:{" "}
        <span className="font-medium text-foreground">
          {value.join(", ") || "—"}
        </span>
      </p>
      <Select
        aria-label="Select framework"
        items={frameworks}
        value={value}
        onValueChange={(details) => setValue(details.value)}
      >
        <SelectTriggerField>
          <SelectValue placeholder="Select framework" />
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
};

export default SelectControlled;
