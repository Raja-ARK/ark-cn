import { useMemo } from "react";
import {
  createListCollection,
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
} from "@/components/ui/listbox";

const ListboxMultipleDemo = () => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: [
          { label: "Apple", value: "apple" },
          { label: "Banana", value: "banana" },
          { label: "Orange", value: "orange" },
        ],
      }),
    [],
  );
  return (
    <div className="w-full max-w-sm">
      <Listbox
        collection={collection}
        defaultValue={["apple", "orange"]}
        selectionMode="multiple"
      >
        <ListboxLabel>Multiple selection</ListboxLabel>
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

export default ListboxMultipleDemo;
