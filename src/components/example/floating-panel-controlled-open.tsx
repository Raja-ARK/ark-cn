import {
  ArrowDownLeftIcon,
  GripVerticalIcon,
  Maximize2Icon,
  MinusIcon,
  XIcon,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
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

const FloatingPanelControlledOpenDemo = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <Button
        size="sm"
        type="button"
        variant="secondary"
        onClick={() => {
          setOpen(true);
        }}
      >
        Open externally
      </Button>
      <FloatingPanel
        defaultSize={{ height: 220, width: 360 }}
        onOpenChange={(e) => {
          setOpen(e.open);
        }}
        open={open}
      >
        <FloatingPanelTrigger asChild>
          <Button size="sm" variant="outline">
            Toggle panel
          </Button>
        </FloatingPanelTrigger>
        <FloatingPanelPopup>
          <FloatingPanelDragTrigger>
            <FloatingPanelHeader>
              <FloatingPanelTitle>
                <GripVerticalIcon className="size-4 shrink-0 text-muted-foreground" />
                Controlled open
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
          <FloatingPanelBody>
            <p>open is driven by React state.</p>
          </FloatingPanelBody>
        </FloatingPanelPopup>
      </FloatingPanel>
    </div>
  );
};

export default FloatingPanelControlledOpenDemo;
