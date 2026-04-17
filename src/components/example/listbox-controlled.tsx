import { useMemo, useState } from "react";
import {
  createListCollection,
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
} from "@/components/ui/listbox";

const ListboxControlledDemo = () => {
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
  const [value, setValue] = useState<string[]>(["vue"]);
  return (
    <div className="w-full max-w-sm">
      <Listbox
        collection={collection}
        onValueChange={(d) => setValue(d.value)}
        value={value}
      >
        <ListboxLabel>Controlled</ListboxLabel>
        <ListboxContent>
          {collection.items.map((item) => (
            <ListboxItem key={item.value} item={item}>
              <ListboxItemText>{item.label}</ListboxItemText>
              <ListboxItemIndicator />
            </ListboxItem>
          ))}
        </ListboxContent>
      </Listbox>
      <p className="mt-2 text-muted-foreground text-xs">
        value: {value.join(", ") || "—"}
      </p>
    </div>
  );
};

export default ListboxControlledDemo;
