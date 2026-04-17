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

const FRUITS = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Orange", value: "orange" },
  { label: "Grape", value: "grape" },
  { label: "Strawberry", value: "strawberry" },
] as const;

const ListboxSelectAllDemo = () => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: [...FRUITS],
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
                <Button
                  onClick={() => api.selectAll()}
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  Select all
                </Button>
                <Button
                  onClick={() => api.clearValue()}
                  size="sm"
                  type="button"
                  variant="outline"
                >
                  Clear
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
