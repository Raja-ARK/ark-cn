import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  PasswordInput,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const PasswordInputWithField = () => (
  <Field className="max-w-xs">
    <FieldLabel>Account password</FieldLabel>
    <PasswordInputRoot>
      <PasswordInput placeholder="Enter your password" />
    </PasswordInputRoot>
    <FieldDescription>
      Field label and helper text around the password input.
    </FieldDescription>
  </Field>
);

export default PasswordInputWithField;
