import { useMemo } from "react";
import { Button } from "@/components/ui/button";
import {
  createListCollection,
  Listbox,
  ListboxContent,
  ListboxContext,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
} from "@/components/ui/listbox";

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

const ListboxSelectAllDemo = () => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: COMBOBOX_FRUITS.slice(0, 5),
      }),
    [],
  );
  return (
    <div className="w-full max-w-sm">
      <Listbox
        collection={collection}
        defaultValue={[]}
        selectionMode="multiple"
      >
        <div className="flex flex-wrap gap-2">
          <ListboxContext>
            {(api) => (
              <>
                <Button asChild size="sm" type="button" variant="outline">
                  <button onClick={() => api.selectAll()} type="button">
                    Select all
                  </button>
                </Button>
                <Button asChild size="sm" type="button" variant="outline">
                  <button onClick={() => api.clearValue()} type="button">
                    Clear
                  </button>
                </Button>
              </>
            )}
          </ListboxContext>
        </div>
        <ListboxLabel>Fruits</ListboxLabel>
        <ListboxContent>
          {collection.items.map((item) => (
            <ListboxItem key={item.value} item={item}>
              <ListboxItemText>{item.label}</ListboxItemText>
              <ListboxItemIndicator />
            </ListboxItem>
          ))}
        </ListboxContent>
      </Listbox>
    </div>
  );
};

export default ListboxSelectAllDemo;
