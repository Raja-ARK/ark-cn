import {
  Field,
  FieldError,
  FieldInput,
  FieldLabel,
} from "@/components/ui/field";
import {
  Fieldset,
  FieldsetError,
  FieldsetLegend,
} from "@/components/ui/fieldset";

const FieldsetInvalidDemo = () => (
  <Fieldset className="max-w-md" invalid>
    <FieldsetLegend>Account information</FieldsetLegend>
    <FieldsetError>Please fix the errors below to continue.</FieldsetError>
    <Field invalid>
      <FieldLabel>Username</FieldLabel>
      <FieldInput defaultValue="jo" />
      <FieldError>Username must be at least 3 characters</FieldError>
    </Field>
    <Field invalid>
      <FieldLabel>Email</FieldLabel>
      <FieldInput defaultValue="invalid-email" type="email" />
      <FieldError>Please enter a valid email address</FieldError>
    </Field>
  </Fieldset>
);

export default FieldsetInvalidDemo;
