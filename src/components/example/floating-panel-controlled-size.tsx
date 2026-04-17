import {
  ArrowDownLeftIcon,
  GripVerticalIcon,
  Maximize2Icon,
  MinusIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import type { FloatingPanelProps } from "@/components/ui/floating-panel";
import {
  FloatingPanel,
  FloatingPanelBody,
  FloatingPanelCloseTrigger,
  FloatingPanelControl,
  FloatingPanelDragTrigger,
  FloatingPanelHeader,
  FloatingPanelPopup,
  FloatingPanelStageTrigger,
  FloatingPanelTitle,
  FloatingPanelTrigger,
} from "@/components/ui/floating-panel";

const FloatingPanelDemoLayout = ({
  title,
  children,
  ...root
}: FloatingPanelProps & { title: string; children: React.ReactNode }) => (
  <FloatingPanel defaultSize={{ width: 360, height: 220 }} {...root}>
    <FloatingPanelTrigger asChild>
      <Button size="sm" variant="outline">
        Open panel
      </Button>
    </FloatingPanelTrigger>
    <FloatingPanelPopup>
      <FloatingPanelDragTrigger>
        <FloatingPanelHeader>
          <FloatingPanelTitle>
            <GripVerticalIcon className="size-4 shrink-0 text-muted-foreground" />
            {title}
          </FloatingPanelTitle>
          <FloatingPanelControl>
            <FloatingPanelStageTrigger
              aria-label="Minimize"
              stage="minimized"
              asChild
            >
              <Button variant="ghost" size="icon-sm">
                <MinusIcon />
              </Button>
            </FloatingPanelStageTrigger>
            <FloatingPanelStageTrigger
              aria-label="Maximize"
              stage="maximized"
              asChild
            >
              <Button variant="ghost" size="icon-sm">
                <Maximize2Icon />
              </Button>
            </FloatingPanelStageTrigger>
            <FloatingPanelStageTrigger
              aria-label="Restore"
              stage="default"
              asChild
            >
              <Button variant="ghost" size="icon-sm">
                <ArrowDownLeftIcon />
              </Button>
            </FloatingPanelStageTrigger>
            <FloatingPanelCloseTrigger aria-label="Close" asChild>
              <Button variant="ghost" size="icon-sm">
                <XIcon />
              </Button>
            </FloatingPanelCloseTrigger>
          </FloatingPanelControl>
        </FloatingPanelHeader>
      </FloatingPanelDragTrigger>
      <FloatingPanelBody>{children}</FloatingPanelBody>
    </FloatingPanelPopup>
  </FloatingPanel>
);

const FloatingPanelControlledSizeDemo = () => {
  const [size, setSize] = useState({ height: 300, width: 400 });

  return (
    <FloatingPanelDemoLayout
      title="Controlled size"
      onSizeChange={(e) => {
        setSize(e.size);
      }}
      size={size}
    >
      <p className="font-mono text-xs">
        width: {Math.round(size.width)} · height: {Math.round(size.height)}
      </p>
    </FloatingPanelDemoLayout>
  );
};

export default FloatingPanelControlledSizeDemo;
