import {
  Combobox,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxLabel,
  ComboboxList,
  ComboboxPopup,
} from "@/components/ui/combobox";

const COMBOBOX_FRUITS = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
  { label: "Mango", value: "mango" },
  { label: "Pineapple", value: "pineapple" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Peach", value: "peach" },
  { label: "Pear", value: "pear" },
] as const;

const ComboboxWithLabelDemo = () => {
  return (
    <Combobox items={COMBOBOX_FRUITS}>
      <div className="flex max-w-xs flex-col gap-2">
        <ComboboxLabel>Fruits</ComboboxLabel>
        <ComboboxInput
          aria-label="Select a fruit"
          placeholder="Select a fruit…"
        />
      </div>
      <ComboboxPopup>
        <ComboboxEmpty>No results found.</ComboboxEmpty>
        <ComboboxList items={COMBOBOX_FRUITS}>
          {(item) => (
            <ComboboxItem item={item}>
              <ComboboxItemText>{item.label}</ComboboxItemText>
              <ComboboxItemIndicator />
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxPopup>
    </Combobox>
  );
};

export default ComboboxWithLabelDemo;
