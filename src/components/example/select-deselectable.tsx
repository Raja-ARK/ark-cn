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

const SelectDeselectableDemo = () => (
  <div className="w-full max-w-xs">
    <Select
      aria-label="Deselectable"
      defaultValue={["next"]}
      deselectable
      items={frameworks}
    >
      <SelectTriggerField>
        <SelectValue placeholder="Tap again to clear" />
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

export default SelectDeselectableDemo;
