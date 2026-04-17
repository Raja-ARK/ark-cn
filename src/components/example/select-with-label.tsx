import {
  Select,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectPopup,
  SelectTriggerField,
  SelectValue,
} from "@/components/ui/select";

const commandItems = [
  { description: "npx create-next-app", label: "Next.js", value: "next" },
  { description: "npm create vite@latest", label: "Vite", value: "vite" },
  { description: "npm create astro@latest", label: "Astro", value: "astro" },
] as const;

const SelectWithLabelDemo = () => (
  <div className="w-full max-w-xs">
    <Select
      aria-label="Select command"
      defaultValue={[commandItems[0].value]}
      items={commandItems}
    >
      <SelectLabel>Commands</SelectLabel>
      <SelectTriggerField>
        <SelectValue />
      </SelectTriggerField>
      <SelectPopup>
        <SelectList>
          {commandItems.map((item) => (
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

export default SelectWithLabelDemo;
