import { Button } from "@/components/ui/button";
import {
  PasswordInput,
  PasswordInputLabel,
  PasswordInputRootProvider,
  usePasswordInput,
} from "@/components/ui/password-input";

const PasswordInputRootProviderDemo = () => {
  const store = usePasswordInput({ defaultVisible: false });

  return (
    <PasswordInputRootProvider value={store}>
      <div className="flex w-full max-w-xs flex-col gap-2">
        <p className="text-muted-foreground text-xs">
          usePasswordInput + PasswordInputRootProvider - visible{" "}
          <span className="font-medium text-foreground">
            {String(store.visible)}
          </span>
        </p>
        <PasswordInputLabel>Password</PasswordInputLabel>
        <PasswordInput defaultValue="hunter2" />

        <Button
          onClick={store.toggleVisible}
          size="sm"
          type="button"
          variant="outline"
        >
          Toggle from outside
        </Button>
      </div>
    </PasswordInputRootProvider>
  );
};

export default PasswordInputRootProviderDemo;
