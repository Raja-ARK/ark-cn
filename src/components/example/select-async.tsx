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

const SelectAsyncDemo = () => {
  const [items, setItems] = useState<(typeof frameworks)[number][]>(
    frameworks.slice(0, 1),
  );
  const [busy, setBusy] = useState(false);

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-muted-foreground text-xs">
        Open the menu to load the full list{busy ? "…" : "."}
      </p>
      <Select
        aria-label="Async frameworks"
        items={items}
        onOpenChange={({ open }) => {
          if (open && items.length < frameworks.length) {
            setBusy(true);
            window.setTimeout(() => {
              setItems([...frameworks]);
              setBusy(false);
            }, 500);
          }
        }}
      >
        <SelectTriggerField>
          <SelectValue placeholder="Open to load…" />
        </SelectTriggerField>
        <SelectPopup>
          <SelectList>
            {items.map((item) => (
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

export default SelectAsyncDemo;
