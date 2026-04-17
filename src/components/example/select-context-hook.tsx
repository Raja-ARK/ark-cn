import {
  Select,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectTriggerField,
  SelectValue,
  useSelectContext,
} from "@/components/ui/select";

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
] as const;

const SelectContextHookDemo = () => {
  const Inner = () => {
    const ctx = useSelectContext();
    return (
      <p className="text-muted-foreground text-xs">
        useSelectContext:{" "}
        <span className="font-medium text-foreground">
          {ctx.valueAsString || "—"}
        </span>
      </p>
    );
  };

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <Select aria-label="Context" defaultValue={["next"]} items={frameworks}>
        <Inner />
        <SelectTriggerField>
          <SelectValue />
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
      </Select>
    </div>
  );
};

export default SelectContextHookDemo;
