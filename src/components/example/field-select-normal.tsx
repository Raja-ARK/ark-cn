import { createListCollection } from "@ark-ui/react/collection";
import { Button } from "@/components/ui/button";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Select,
  SelectControl,
  SelectIndicator,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const frameworks = createListCollection({
  items: [
    { label: "React", value: "react" },
    { label: "Solid", value: "solid" },
    { label: "Vue", value: "vue" },
  ],
});

const FieldSelectNormalDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel>Framework</FieldLabel>
    <Select collection={frameworks} defaultValue={["react"]}>
      <SelectControl>
        <SelectTrigger asChild>
          <Button variant="outline">
            <SelectValue placeholder="Pick a framework" />
            <SelectIndicator />
          </Button>
        </SelectTrigger>
      </SelectControl>
      <SelectPopup>
        <SelectList>
          {frameworks.items.map((item) => (
            <SelectItem item={item} key={item.value}>
              <SelectItemText>{item.label}</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
          ))}
        </SelectList>
      </SelectPopup>
    </Select>
    <FieldDescription>Choose your preferred UI framework.</FieldDescription>
  </Field>
);

export default FieldSelectNormalDemo;
