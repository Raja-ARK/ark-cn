import { BoldIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const ToggleDisabledDemo = () => (
  <Toggle aria-label="Disabled toggle" disabled variant="outline">
    <BoldIcon />
  </Toggle>
);

export default ToggleDisabledDemo;
