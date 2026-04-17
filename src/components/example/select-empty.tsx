import {
  Select,
  SelectEmpty,
  SelectPopup,
  SelectTriggerField,
  SelectValue,
} from "@/components/ui/select";

const SelectEmptyDemo = () => (
  <div className="w-full max-w-xs">
    <Select items={[]}>
      <SelectTriggerField>
        <SelectValue placeholder="No items" />
      </SelectTriggerField>
      <SelectPopup>
        <SelectEmpty>No items to display</SelectEmpty>
      </SelectPopup>
    </Select>
  </div>
);

export default SelectEmptyDemo;
