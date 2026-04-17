import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const ToggleGroupBasicDemo = () => (
  <ToggleGroup defaultValue={["left"]}>
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
);

export default ToggleGroupBasicDemo;
