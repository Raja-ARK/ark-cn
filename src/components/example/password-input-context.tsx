import {
  PasswordInput,
  PasswordInputContext,
  PasswordInputLabel,
  PasswordInputRoot,
} from "@/components/ui/password-input";

const PasswordInputContextDemo = () => (
  <PasswordInputRoot className="max-w-xs">
    <PasswordInputContext>
      {(context) => (
        <p className="text-muted-foreground text-xs">
          Context: password is{" "}
          <span className="font-medium text-foreground">
            {context.visible ? "shown" : "masked"}
          </span>
        </p>
      )}
    </PasswordInputContext>
    <PasswordInputLabel>Password</PasswordInputLabel>
    <PasswordInput placeholder="Try the eye toggle" />
  </PasswordInputRoot>
);

export default PasswordInputContextDemo;
