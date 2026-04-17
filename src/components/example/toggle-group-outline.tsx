import { BoldIcon, ItalicIcon, UnderlineIcon } from "lucide-react";
import {
  ToggleGroup,
  ToggleGroupItem,
  ToggleGroupSeparator,
} from "@/components/ui/toggle-group";

const ToggleGroupOutlineDemo = () => (
  <ToggleGroup defaultValue={["bold"]} variant="outline">
    <ToggleGroupItem aria-label="Toggle bold" value="bold">
      <BoldIcon />
    </ToggleGroupItem>
    <ToggleGroupSeparator />
    <ToggleGroupItem aria-label="Toggle italic" value="italic">
      <ItalicIcon />
    </ToggleGroupItem>
    <ToggleGroupSeparator />
    <ToggleGroupItem aria-label="Toggle underline" value="underline">
      <UnderlineIcon />
    </ToggleGroupItem>
  </ToggleGroup>
);

export default ToggleGroupOutlineDemo;
