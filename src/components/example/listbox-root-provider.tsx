import { useMemo } from "react";
import {
  createListCollection,
  ListboxContent,
  ListboxItem,
  ListboxItemIndicator,
  ListboxItemText,
  ListboxLabel,
  ListboxRootProvider,
  useListbox,
} from "@/components/ui/listbox";

const ListboxRootProviderDemo = () => {
  const collection = useMemo(
    () =>
      createListCollection({
        items: [
          { label: "Option A", value: "a" },
          { label: "Option B", value: "b" },
        ],
      }),
    [],
  );
  const service = useListbox({ collection, defaultValue: ["a"] });
  return (
    <ListboxRootProvider
      className="flex w-full max-w-sm flex-col gap-2"
      value={service}
    >
      <ListboxLabel>useListbox + RootProvider</ListboxLabel>
      <ListboxContent>
        {collection.items.map((item) => (
          <ListboxItem key={item.value} item={item}>
            <ListboxItemText>{item.label}</ListboxItemText>
            <ListboxItemIndicator />
          </ListboxItem>
        ))}
      </ListboxContent>
    </ListboxRootProvider>
  );
};

export default ListboxRootProviderDemo;
