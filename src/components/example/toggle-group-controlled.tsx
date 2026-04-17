import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-react";
import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ToggleGroupControlledDemo = () => {
  const [value, setValue] = useState(["left"]);

  return (
    <div className="space-y-2">
      <ToggleGroup
        onValueChange={(event) => setValue(event.value)}
        value={value}
        variant="outline"
      >
        <ToggleGroupItem aria-label="Align left" value="left">
          <AlignLeftIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Align center" value="center">
          <AlignCenterIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Align right" value="right">
          <AlignRightIcon />
        </ToggleGroupItem>
        <ToggleGroupItem aria-label="Justify" value="justify">
          <AlignJustifyIcon />
        </ToggleGroupItem>
      </ToggleGroup>
      <p className="text-muted-foreground text-xs">
        Value:{" "}
        <span className="text-foreground">{value.join(", ") || "none"}</span>
      </p>
    </div>
  );
};

export default ToggleGroupControlledDemo;
