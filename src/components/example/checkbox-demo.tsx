import {
  Checkbox,
  CheckboxLabel,
  CheckboxRoot,
} from "@/components/ui/checkbox";

const CheckboxDemo = () => (
  <div className="w-full max-w-md grid place-items-center">
    <CheckboxRoot>
      <Checkbox />
      <CheckboxLabel>Enable notifications</CheckboxLabel>
    </CheckboxRoot>
  </div>
);

export default CheckboxDemo;
