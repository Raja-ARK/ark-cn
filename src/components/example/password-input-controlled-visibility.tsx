import { useState } from "react";
import {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const PasswordInputControlledVisibility = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="flex w-full max-w-xs flex-col gap-2">
      <p className="text-muted-foreground text-xs">
        Controlled visible:{" "}
        <span className="font-medium text-foreground">{String(visible)}</span>
      </p>
      <PasswordInputRoot
        onVisibilityChange={(details) => setVisible(details.visible)}
        visible={visible}
      >
        <PasswordInputLabel>Password</PasswordInputLabel>
        <PasswordInput placeholder="Toggle is controlled externally" />
      </PasswordInputRoot>
    </div>
  );
};

export default PasswordInputControlledVisibility;
