import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
} from "lucide-react";
import {
  ToggleGroupItem,
  ToggleGroupRootProvider,
  useToggleGroup,
} from "@/components/ui/toggle-group";

const ToggleGroupRootProviderDemo = () => {
  const toggleGroup = useToggleGroup({ defaultValue: ["left"] });

  return (
    <div className="space-y-2">
      <p className="text-muted-foreground text-xs">
        Current:{" "}
        <span className="text-foreground">
          {toggleGroup.value.join(", ") || "none"}
        </span>
      </p>
      <ToggleGroupRootProvider value={toggleGroup}>
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
      </ToggleGroupRootProvider>
    </div>
  );
};

export default ToggleGroupRootProviderDemo;
