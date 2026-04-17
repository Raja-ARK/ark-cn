import { BoldIcon } from "lucide-react";
import { Toggle } from "@/components/ui/toggle";

const ToggleBasicDemo = () => (
  <Toggle aria-label="Toggle bold" variant="outline">
    <BoldIcon />
  </Toggle>
);

export default ToggleBasicDemo;
