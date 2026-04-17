import { HeartIcon } from "lucide-react";
import { useState } from "react";
import { Toggle, ToggleIndicator } from "@/components/ui/toggle";

const ToggleControlledDemo = () => {
  const [pressed, setPressed] = useState(false);

  return (
    <div className="flex items-center gap-3">
      <Toggle
        aria-label="Toggle favorite"
        onPressedChange={setPressed}
        pressed={pressed}
        variant="outline"
      >
        <ToggleIndicator fallback={<HeartIcon />}>
          <HeartIcon fill="currentColor" />
        </ToggleIndicator>
      </Toggle>
      <p className="text-muted-foreground text-xs">
        Pressed:{" "}
        <span className="font-medium text-foreground">{String(pressed)}</span>
      </p>
    </div>
  );
};

export default ToggleControlledDemo;
