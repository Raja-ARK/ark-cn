import {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const PasswordInputIgnoreManagers = () => (
  <div className="w-full max-w-xs">
    <PasswordInputRoot ignorePasswordManagers>
      <PasswordInputLabel>API key</PasswordInputLabel>
      <PasswordInput placeholder="sk-..." />
    </PasswordInputRoot>
  </div>
);

export default PasswordInputIgnoreManagers;
