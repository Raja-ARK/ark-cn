import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxList,
  ComboboxPopup,
} from "@/components/ui/combobox";
import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";

const cities = [
  { label: "San Francisco", value: "sf" },
  { label: "New York", value: "nyc" },
  { label: "Tokyo", value: "tokyo" },
] as const;

const FieldComboboxNormalDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel>City</FieldLabel>
    <Combobox items={cities}>
      <ComboboxInput placeholder="Search a city..." />
      <ComboboxPopup>
        <ComboboxEmpty>No city found.</ComboboxEmpty>
        <ComboboxList items={cities}>
          {(item) => (
            <ComboboxItem item={item}>
              <ComboboxItemText>{item.label}</ComboboxItemText>
              <ComboboxItemIndicator />
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
    <FieldDescription>Type to filter available options.</FieldDescription>
  </Field>
);

export default FieldComboboxNormalDemo;
