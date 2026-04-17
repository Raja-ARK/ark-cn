import { Field, FieldInput, FieldLabel } from "@/components/ui/field";
import { Fieldset, FieldsetLegend } from "@/components/ui/fieldset";

const FieldsetDisabledDemo = () => (
  <Fieldset className="max-w-md" disabled>
    <FieldsetLegend>Read-only profile</FieldsetLegend>
    <Field disabled>
      <FieldLabel>Name</FieldLabel>
      <FieldInput defaultValue="Jane Doe" disabled />
    </Field>
    <Field disabled>
      <FieldLabel>Email</FieldLabel>
      <FieldInput defaultValue="jane@example.com" disabled type="email" />
    </Field>
  </Fieldset>
);

export default FieldsetDisabledDemo;
