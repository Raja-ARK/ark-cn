import {
  Select,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectTriggerField,
  SelectValue,
} from "@/components/ui/select";

const commandItems = [
  { description: "npx create-next-app", label: "Next.js", value: "next" },
  { description: "npm create vite@latest", label: "Vite", value: "vite" },
  { description: "npm create astro@latest", label: "Astro", value: "astro" },
] as const;

const SelectObjectValuesDemo = () => (
  <div className="w-full max-w-xs">
    <Select
      aria-label="Commands"
      defaultValue={[commandItems[0].value]}
      itemToString={(item) => item.value}
      items={commandItems}
    >
      <SelectTriggerField className="h-max min-h-8 sm:h-max">
        <SelectValue>
          {(api) => {
            const item = api.selectedItems[0] as
              | (typeof commandItems)[number]
              | undefined;
            if (!item) {
              return "Select…";
            }
            return (
              <span className="flex flex-col text-left">
                <span className="truncate">{item.label}</span>
                <span className="truncate text-muted-foreground text-xs">
                  {item.description}
                </span>
              </span>
            );
          }}
        </SelectValue>
      </SelectTriggerField>
      <SelectPopup>
        <SelectList>
          {commandItems.map((item) => (
            <SelectItem key={item.value} item={item}>
              <span className="flex flex-1 flex-col gap-0.5">
                <SelectItemText>{item.label}</SelectItemText>
                <span className="text-muted-foreground text-xs">
                  {item.description}
                </span>
              </span>
              <SelectItemIndicator />
            </SelectItem>
          ))}
        </SelectList>
      </SelectPopup>
    </Select>
  </div>
);

export default SelectObjectValuesDemo;
