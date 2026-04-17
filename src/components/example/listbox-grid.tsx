import { useMemo } from "react";
import {
  createGridCollection,
  Listbox,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
} from "@/components/ui/listbox";

const LISTBOX_GRID_CELLS = Array.from({ length: 9 }, (_, i) => ({
  label: `Cell ${i + 1}`,
  value: `c${i + 1}`,
}));

const ListboxGridDemo = () => {
  const collection = useMemo(
    () =>
      createGridCollection({
        columnCount: 3,
        items: LISTBOX_GRID_CELLS,
      }),
    [],
  );
  return (
    <div className="w-full max-w-sm">
      <Listbox collection={collection} defaultValue={["c1"]}>
        <ListboxLabel>Grid (3 columns)</ListboxLabel>
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

export default ListboxGridDemo;
