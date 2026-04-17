import {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const PasswordInputAutocomplete = () => (
  <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
    <PasswordInputRoot autoComplete="new-password" className="flex-1">
      <PasswordInputLabel>New password</PasswordInputLabel>
      <PasswordInput name="new-password" placeholder="Create a password" />
    </PasswordInputRoot>

    <PasswordInputRoot autoComplete="current-password" className="flex-1">
      <PasswordInputLabel>Current password</PasswordInputLabel>
      <PasswordInput name="current-password" placeholder="Sign in" />
    </PasswordInputRoot>
  </div>
);

export default PasswordInputAutocomplete;
