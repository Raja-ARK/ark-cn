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

const ListboxDisabledDemo = () => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: [
          { label: "Available", value: "a" },
          { label: "Unavailable", value: "b" },
          { label: "Available", value: "c" },
        ],
        isItemDisabled: (item) => item.value === "b",
      }),
    [],
  );
  return (
    <div className="w-full max-w-sm">
      <Listbox collection={collection} defaultValue={["a"]}>
        <ListboxLabel>Disabled item</ListboxLabel>
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

export default ListboxDisabledDemo;
