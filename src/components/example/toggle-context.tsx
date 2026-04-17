import { BoldIcon } from "lucide-react";
import { Toggle, ToggleContext } from "@/components/ui/toggle";

const ToggleContextDemo = () => (
  <Toggle aria-label="Toggle bold state" variant="outline">
    <BoldIcon />
    <ToggleContext>
      {(context) => (context.pressed ? "On" : "Off")}
    </ToggleContext>
  </Toggle>
);

export default ToggleContextDemo;
