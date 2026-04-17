import { useMemo } from "react";
import {
  createListCollection,
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemGroup,
  ListboxItemGroupLabel,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
} from "@/components/ui/listbox";

const LISTBOX_ECOSYSTEM = [
  { ecosystem: "UI", label: "React", value: "react" },
  { ecosystem: "UI", label: "Vue", value: "vue" },
  { ecosystem: "UI", label: "Svelte", value: "svelte" },
  { ecosystem: "Runtime", label: "Node.js", value: "node" },
] as const;

const ListboxGroupedDemo = () => {
  const collection = useMemo(
    () =>
      createListCollection({
        groupBy: (item) => item.ecosystem,
        items: [...LISTBOX_ECOSYSTEM],
      }),
    [],
  );
  return (
    <div className="w-full max-w-sm">
      <Listbox collection={collection} defaultValue={["react"]}>
        <ListboxLabel>Grouped</ListboxLabel>
        <ListboxContent>
          {collection.group().map(([group, items]) => (
            <ListboxItemGroup key={group}>
              <ListboxItemGroupLabel>{group}</ListboxItemGroupLabel>
              {items.map((item) => (
                <ListboxItem key={item.value} item={item}>
                  <ListboxItemText>{item.label}</ListboxItemText>
                  <ListboxItemIndicator />
                </ListboxItem>
              ))}
            </ListboxItemGroup>
          ))}
        </ListboxContent>
      </Listbox>
    </div>
  );
};

export default ListboxGroupedDemo;
