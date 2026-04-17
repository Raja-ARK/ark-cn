import { ChevronsUpDownIcon, SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxControl,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxItemText,
  ComboboxList,
  ComboboxPopup,
  ComboboxTrigger,
  ComboboxValue,
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

const ComboboxSelectButtonDemo = () => (
  <Combobox
    closeOnSelect
    defaultValue={["apple"]}
    items={COMBOBOX_FRUITS}
    openOnClick
    selectionBehavior="clear"
  >
    <ComboboxControl className="w-full">
      <ComboboxControl>
        <ComboboxTrigger asChild>
          <Button
            className="justify-between font-normal w-64"
            type="button"
            variant="outline"
          >
            <ComboboxValue placeholder="Select a fruit" />
            <ChevronsUpDownIcon className="opacity-60" />
          </Button>
        </ComboboxTrigger>
      </ComboboxControl>
    </ComboboxControl>
    <ComboboxPopup aria-label="Select fruit" className="relative">
      <div className="border-b p-2">
        <ComboboxInput
          aria-label="Select a fruit"
          placeholder="Select a fruit…"
          showClear={false}
          showIndicator={false}
          startAddon={<SearchIcon className="size-3" />}
        />
      </div>
      <ComboboxEmpty>No items found.</ComboboxEmpty>
      <ComboboxList
        items={COMBOBOX_FRUITS}
        className="max-h-50 overflow-y-auto"
      >
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

export default ComboboxSelectButtonDemo;
