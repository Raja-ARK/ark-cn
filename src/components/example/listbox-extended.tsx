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

const ListboxExtendedDemo = () => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: [
          { label: "One", value: "1" },
          { label: "Two", value: "2" },
          { label: "Three", value: "3" },
          { label: "Four", value: "4" },
        ],
      }),
    [],
  );
  return (
    <div className="w-full max-w-sm">
      <Listbox collection={collection} selectionMode="extended">
        <ListboxLabel>Extended (Ctrl + click)</ListboxLabel>
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

export default ListboxExtendedDemo;
