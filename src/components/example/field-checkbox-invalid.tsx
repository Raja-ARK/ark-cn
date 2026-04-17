import { Checkbox, CheckboxRoot } from "@/components/ui/checkbox";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";

const FieldCheckboxInvalidDemo = () => (
  <Field className="max-w-md" invalid>
    <FieldLabel className="flex cursor-pointer items-center gap-2 font-normal">
      <CheckboxRoot invalid>
        <Checkbox />
      </CheckboxRoot>
      Accept terms and conditions
    </FieldLabel>
    <FieldError>You must accept the terms and conditions.</FieldError>
  </Field>
);

export default FieldCheckboxInvalidDemo;
