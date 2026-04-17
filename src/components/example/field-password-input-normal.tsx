import {
  Field,
  FieldDescription,
  FieldInput,
  FieldLabel,
} from "@/components/ui/field";
import {
  PasswordInput,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const FieldPasswordInputNormalDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel>Password</FieldLabel>
    <PasswordInputRoot>
      <FieldInput asChild>
        <PasswordInput placeholder="Enter your password" />
      </FieldInput>
    </PasswordInputRoot>
    <FieldDescription>
      Use at least 8 characters for stronger security.
    </FieldDescription>
  </Field>
);

export default FieldPasswordInputNormalDemo;
