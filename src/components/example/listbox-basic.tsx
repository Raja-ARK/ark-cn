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

const ListboxBasicDemo = () => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: [
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
          { label: "Svelte", value: "svelte" },
        ],
      }),
    [],
  );
  return (
    <div className="w-full max-w-sm">
      <Listbox collection={collection} defaultValue={["react"]}>
        <ListboxLabel>Framework</ListboxLabel>
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

export default ListboxBasicDemo;
