import {
  Checkbox,
  CheckboxLabel,
  CheckboxRoot,
} from "@/components/ui/checkbox";

const CheckboxDisabledDemo = () => (
  <CheckboxRoot disabled>
    <Checkbox />
    <CheckboxLabel>Disabled option</CheckboxLabel>
  </CheckboxRoot>
);

export default CheckboxDisabledDemo;
