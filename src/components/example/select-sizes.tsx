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

const SelectSizesDemo = () => (
  <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
    <Select aria-label="Small" defaultValue={["next"]} items={frameworks}>
      <SelectTriggerField size="sm">
        <SelectValue placeholder="Small" />
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
    <Select aria-label="Large" defaultValue={["vite"]} items={frameworks}>
      <SelectTriggerField size="lg">
        <SelectValue placeholder="Large" />
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

export default SelectSizesDemo;
