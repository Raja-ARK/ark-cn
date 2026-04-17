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

const manyItems = Array.from({ length: 80 }, (_, index) => ({
  label: `Item ${index + 1}`,
  value: `item-${index + 1}`,
}));

const SelectOverflowDemo = () => (
  <div className="w-full max-w-xs">
    <Select
      aria-label="Long list"
      items={manyItems}
      positioning={{
        flip: true,
        hideWhenDetached: true,
        placement: "bottom-start",
        sameWidth: true,
      }}
    >
      <SelectTriggerField>
        <SelectValue placeholder="Scroll the list" />
      </SelectTriggerField>
      <SelectPopup>
        <SelectList className="max-h-52">
          {manyItems.map((item) => (
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

export default SelectOverflowDemo;
