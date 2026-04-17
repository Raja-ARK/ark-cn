import { useEffect, useState } from "react";
import {
  Listbox,
  ListboxContent,
  ListboxEmpty,
  ListboxInput,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
  useListCollection,
} from "@/components/ui/listbox";

const FRUITS = [
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

const ListboxFilteringDemo = () => {
  const [query, setQuery] = useState("");
  const { collection, filter } = useListCollection({
    filter: (itemText, filterText) =>
      itemText.toLowerCase().includes(filterText.toLowerCase()),
    initialItems: [...FRUITS],
  });

  useEffect(() => {
    filter(query);
  }, [query, filter]);

  return (
    <div className="w-full max-w-sm">
      <Listbox collection={collection}>
        <ListboxLabel>Filter</ListboxLabel>
        <ListboxInput
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search fruits..."
          value={query}
        />
        <ListboxContent>
          <ListboxEmpty>No matches.</ListboxEmpty>
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

export default ListboxFilteringDemo;
