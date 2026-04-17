import {
  Checkbox,
  CheckboxGroup,
  CheckboxLabel,
  CheckboxRoot,
} from "@/components/ui/checkbox";

const checkboxItems = [
  {
    label: "Marketing alerts",
    value: "marketing",
  },
  {
    label: "Product alerts",
  },
  {
    label: "Security alerts",
    value: "security",
  },
];

const CheckboxGroupDemo = () => {
  return (
    <CheckboxGroup className="space-y-2">
      {checkboxItems.map((item) => (
        <CheckboxRoot key={item.value} value={item.value}>
          <Checkbox />
          <CheckboxLabel className="capitalize">{item.label}</CheckboxLabel>
        </CheckboxRoot>
      ))}
    </CheckboxGroup>
  );
};

export default CheckboxGroupDemo;
