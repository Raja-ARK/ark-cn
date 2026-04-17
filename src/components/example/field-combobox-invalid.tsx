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
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

const teams = [
  { label: "Design", value: "design" },
  { label: "Engineering", value: "engineering" },
  { label: "Marketing", value: "marketing" },
] as const;

const FieldComboboxInvalidDemo = () => (
  <Field className="max-w-xs" invalid>
    <FieldLabel>Team</FieldLabel>
    <Combobox invalid items={teams}>
      <ComboboxInput placeholder="Choose a team..." />
      <ComboboxPopup>
        <ComboboxEmpty>No team found.</ComboboxEmpty>
        <ComboboxList items={teams}>
          {(item) => (
            <ComboboxItem item={item}>
              <ComboboxItemText>{item.label}</ComboboxItemText>
              <ComboboxItemIndicator />
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
    <FieldError>Please select one team.</FieldError>
  </Field>
);

export default FieldComboboxInvalidDemo;
