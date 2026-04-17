import {
  Checkbox,
  CheckboxLabel,
  CheckboxRoot,
} from "@/components/ui/checkbox";
import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset";

const FieldsetCheckboxDemo = () => (
  <Fieldset className="max-w-md">
    <FieldsetLegend>Email preferences</FieldsetLegend>
    <CheckboxRoot defaultChecked>
      <Checkbox />
      <CheckboxLabel>Product updates</CheckboxLabel>
    </CheckboxRoot>
    <CheckboxRoot>
      <Checkbox />
      <CheckboxLabel>Marketing emails</CheckboxLabel>
    </CheckboxRoot>
  </Fieldset>
);

export default FieldsetCheckboxDemo;
