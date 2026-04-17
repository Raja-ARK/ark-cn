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

const SelectSameWidthOffDemo = () => (
  <div className="w-full max-w-xs">
    <Select
      aria-label="Wider popup"
      defaultValue={["next"]}
      items={frameworks}
      positioning={{ placement: "bottom-start", sameWidth: false }}
    >
      <SelectTriggerField>
        <SelectValue />
      </SelectTriggerField>
      <SelectPopup className="min-w-56">
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

export default SelectSameWidthOffDemo;
