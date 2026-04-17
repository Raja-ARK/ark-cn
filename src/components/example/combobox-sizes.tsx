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

const ComboboxSizesDemo = () => (
  <div className="flex max-w-xs flex-col gap-4">
    <Combobox items={COMBOBOX_FRUITS}>
      <ComboboxInput
        aria-label="Select a fruit"
        placeholder="Select a fruit…"
        size="lg"
      />

      <ComboboxPopup>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
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
    <Combobox items={COMBOBOX_FRUITS}>
      <ComboboxInput
        aria-label="Select a fruit"
        placeholder="Select a fruit…"
        size="sm"
      />
      <ComboboxPopup>
        <ComboboxEmpty>No items found.</ComboboxEmpty>
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
  </div>
);

export default ComboboxSizesDemo;
