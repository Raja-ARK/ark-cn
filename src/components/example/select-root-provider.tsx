import { Button } from "@/components/ui/button";
import {
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectList,
  SelectPopup,
  SelectRootProvider,
  SelectTriggerField,
  SelectValue,
  useListCollection,
  useSelect,
} from "@/components/ui/select";

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
] as const;

const SelectRootProviderDemo = () => {
  const { collection } = useListCollection({ initialItems: frameworks });
  const store = useSelect({ collection });

  return (
    <div className="flex w-full max-w-xs flex-col gap-3">
      <SelectRootProvider value={store}>
        <SelectLabel>Framework</SelectLabel>
        <SelectTriggerField>
          <SelectValue placeholder="Pick one" />
        </SelectTriggerField>
        <SelectPopup>
          <SelectList>
            {frameworks.map((item) => (
              <SelectItem key={item.value} item={item}>
                <SelectItemText>{item.label}</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
            ))}
          </SelectList>
        </SelectPopup>
      </SelectRootProvider>
      <Button
        onClick={() => store.setValue(["astro"])}
        type="button"
        variant="outline"
      >
        Set to Astro
      </Button>
    </div>
  );
};

export default SelectRootProviderDemo;
