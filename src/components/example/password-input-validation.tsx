import { useState } from "react";
import {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const PasswordInputValidation = () => {
  const [value, setValue] = useState("");
  const invalid = value.length > 0 && value.length < 8;

  return (
    <div className="w-full max-w-xs">
      <PasswordInputRoot invalid={invalid}>
        <PasswordInputLabel>Password</PasswordInputLabel>
        <PasswordInput
          onChange={(event) => setValue(event.currentTarget.value)}
          value={value}
        />
      </PasswordInputRoot>
      {invalid ? (
        <p className="mt-1.5 text-destructive text-xs">
          Use at least 8 characters.
        </p>
      ) : (
        <p className="mt-1.5 text-muted-foreground text-xs">
          Enter 8+ characters (invalid while too short).
        </p>
      )}
    </div>
  );
};

export default PasswordInputValidation;
