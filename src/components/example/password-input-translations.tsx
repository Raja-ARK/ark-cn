import {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const PasswordInputTranslations = () => (
  <div className="w-full max-w-xs">
    <PasswordInputRoot
      translations={{
        visibilityTrigger: (visible) =>
          visible ? "Hide password" : "Show password",
      }}
    >
      <PasswordInputLabel>Password</PasswordInputLabel>
      <PasswordInput />
    </PasswordInputRoot>
  </div>
);

export default PasswordInputTranslations;
