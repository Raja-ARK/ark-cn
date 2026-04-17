import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxEmpty,
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

const ComboboxMultipleDemo = () => (
  <Combobox
    defaultValue={["apple", "strawberry"]}
    items={COMBOBOX_FRUITS}
    multiple
    openOnClick
    className="max-w-xs"
  >
    {({ selectedItems }) => (
      <>
        <ComboboxChips>
          {selectedItems.map((item) => (
            <ComboboxChip
              key={item.value}
              aria-label={item.label}
              value={item.value}
            >
              {item.label}
            </ComboboxChip>
          ))}
          <ComboboxChipsInput
            aria-label="Add fruit"
            placeholder="Select fruits…"
          />
        </ComboboxChips>
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
      </>
    )}
  </Combobox>
);

export default ComboboxMultipleDemo;
