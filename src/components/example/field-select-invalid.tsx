import { createListCollection } from "@ark-ui/react/collection";
import { Button } from "@/components/ui/button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
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

const priorities = createListCollection({
  items: [
    { label: "Low", value: "low" },
    { label: "Medium", value: "medium" },
    { label: "High", value: "high" },
  ],
});

const FieldSelectInvalidDemo = () => (
  <Field className="max-w-xs" invalid>
    <FieldLabel>Priority</FieldLabel>
    <Select collection={priorities} invalid>
      <SelectControl>
        <SelectTrigger asChild>
          <Button variant="outline">
            <SelectValue placeholder="Select a priority" />
            <SelectIndicator />
          </Button>
        </SelectTrigger>
      </SelectControl>
      <SelectPopup>
        <SelectList>
          {priorities.items.map((item) => (
            <SelectItem item={item} key={item.value}>
              <SelectItemText>{item.label}</SelectItemText>
              <SelectItemIndicator />
            </SelectItem>
          ))}
        </SelectList>
      </SelectPopup>
    </Select>
    <FieldError>Please select a priority before submitting.</FieldError>
  </Field>
);

export default FieldSelectInvalidDemo;
