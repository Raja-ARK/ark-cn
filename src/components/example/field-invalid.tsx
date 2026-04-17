import {
  Field,
  FieldError,
  FieldInput,
  FieldLabel,
} from "@/components/ui/field";

const FieldInvalidDemo = () => (
  <Field className="max-w-xs" invalid>
    <FieldLabel>Email</FieldLabel>
    <FieldInput placeholder="Enter your email" type="email" />
    <FieldError>Please enter a valid email address.</FieldError>
  </Field>
);

export default FieldInvalidDemo;
