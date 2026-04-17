import { useMemo } from "react";
import {
  createListCollection,
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
  ListboxValueText,
} from "@/components/ui/listbox";

const ListboxValueTextDemo = () => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: [
          { label: "React", value: "react" },
          { label: "Vue", value: "vue" },
        ],
      }),
    [],
  );
  return (
    <div className="w-full max-w-sm">
      <Listbox collection={collection}>
        <ListboxLabel>Value text</ListboxLabel>
        <ListboxContent>
          {collection.items.map((item) => (
            <ListboxItem key={item.value} item={item}>
              <ListboxItemText>{item.label}</ListboxItemText>
              <ListboxItemIndicator />
            </ListboxItem>
          ))}
        </ListboxContent>
        <p className="text-muted-foreground text-sm">
          Selected:{" "}
          <ListboxValueText
            className="font-medium text-foreground"
            placeholder="None yet"
          />
        </p>
      </Listbox>
    </div>
  );
};

export default ListboxValueTextDemo;
