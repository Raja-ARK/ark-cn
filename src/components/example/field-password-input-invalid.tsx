import {
  Field,
  FieldError,
  FieldInput,
  FieldLabel,
} from "@/components/ui/field";
import {
  PasswordInput,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const FieldPasswordInputInvalidDemo = () => (
  <Field className="max-w-xs" invalid>
    <FieldLabel>Password</FieldLabel>
    <PasswordInputRoot invalid>
      <FieldInput asChild>
        <PasswordInput defaultValue="1234" placeholder="Enter your password" />
      </FieldInput>
    </PasswordInputRoot>
    <FieldError>Password must contain at least 8 characters.</FieldError>
  </Field>
);

export default FieldPasswordInputInvalidDemo;
