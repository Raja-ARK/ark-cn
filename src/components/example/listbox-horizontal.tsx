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

const ListboxHorizontalDemo = () => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: [
          { label: "Sm", value: "sm" },
          { label: "Md", value: "md" },
          { label: "Lg", value: "lg" },
          { label: "Xl", value: "xl" },
        ],
      }),
    [],
  );
  return (
    <div className="w-full max-w-md">
      <Listbox
        collection={collection}
        defaultValue={["md"]}
        orientation="horizontal"
      >
        <ListboxLabel>Horizontal orientation</ListboxLabel>
        <ListboxContent className="max-h-none min-h-0">
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

export default ListboxHorizontalDemo;
