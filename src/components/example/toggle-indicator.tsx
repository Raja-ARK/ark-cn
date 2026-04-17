import { HeartIcon } from "lucide-react";
import { Toggle, ToggleIndicator } from "@/components/ui/toggle";

const ToggleIndicatorDemo = () => (
  <Toggle aria-label="Toggle favorite" variant="outline">
    <ToggleIndicator fallback={<HeartIcon />}>
      <HeartIcon fill="currentColor" />
    </ToggleIndicator>
  </Toggle>
);

export default ToggleIndicatorDemo;
