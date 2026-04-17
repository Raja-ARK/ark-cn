import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FocusTrap } from "@/components/ui/focus-trap";
import { Input } from "@/components/ui/input";

const FocusTrapDemo = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="grid w-full max-w-xl gap-4">
      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="outline">
          Outside action
        </Button>
        <Button
          type="button"
          variant={disabled ? "default" : "secondary"}
          onClick={() => setDisabled((value) => !value)}
        >
          {disabled ? "Enable trap" : "Disable trap"}
        </Button>
      </div>
      <FocusTrap
        className="grid gap-3 rounded-xl border border-border bg-card p-4"
        disabled={disabled}
      >
        <p className="font-medium text-sm">
          Keyboard focus stays inside this card.
        </p>
        <Input aria-label="Project name" placeholder="Project name" />
        <div className="flex flex-wrap gap-2">
          <Button type="button">Save</Button>
          <Button type="button" variant="outline">
            Cancel
          </Button>
        </div>
      </FocusTrap>
    </div>
  );
};

export default FocusTrapDemo;
