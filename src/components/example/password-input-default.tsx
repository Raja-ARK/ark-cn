import {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const PasswordInputDefault = () => (
  <div className="w-full max-w-xs">
    <PasswordInputRoot>
      <PasswordInputLabel>Password</PasswordInputLabel>
      <PasswordInput placeholder="Enter password" />
    </PasswordInputRoot>
  </div>
);

export default PasswordInputDefault;
