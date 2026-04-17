import { Checkbox, CheckboxRoot } from "@/components/ui/checkbox";
import { Field, FieldLabel } from "@/components/ui/field";

const FieldCheckboxDemo = () => (
  <Field className="max-w-md">
    <FieldLabel className="flex cursor-pointer items-center gap-2 font-normal">
      <CheckboxRoot>
        <Checkbox />
      </CheckboxRoot>
      Accept terms and conditions
    </FieldLabel>
  </Field>
);

export default FieldCheckboxDemo;
