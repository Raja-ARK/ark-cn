import {
  PasswordInput,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const PasswordInputDemo = () => (
  <PasswordInputRoot className="w-full max-w-xs">
    <PasswordInput placeholder="Enter password" />
  </PasswordInputRoot>
);

export default PasswordInputDemo;
