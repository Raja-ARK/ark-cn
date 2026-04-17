import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
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

const SelectFieldDemo = () => (
  <Field className="max-w-xs gap-3">
    <FieldLabel>Framework</FieldLabel>
    <Select
      aria-label="Framework field"
      defaultValue={["next"]}
      items={frameworks}
    >
      <SelectTriggerField>
        <SelectValue placeholder="Choose…" />
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
    <FieldDescription>Pick one for the starter template.</FieldDescription>
  </Field>
);

export default SelectFieldDemo;
