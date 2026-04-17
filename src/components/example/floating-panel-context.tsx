import {
  ArrowDownLeftIcon,
  GripVerticalIcon,
  Maximize2Icon,
  MinusIcon,
  XIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  FloatingPanel,
  FloatingPanelBody,
  FloatingPanelCloseTrigger,
  FloatingPanelContext,
  FloatingPanelControl,
  FloatingPanelDragTrigger,
  FloatingPanelHeader,
  FloatingPanelPopup,
  FloatingPanelStageTrigger,
  FloatingPanelTitle,
  FloatingPanelTrigger,
} from "@/components/ui/floating-panel";

const FloatingPanelContextDemo = () => (
  <FloatingPanel defaultSize={{ height: 220, width: 360 }}>
    <FloatingPanelTrigger asChild>
      <Button size="sm" variant="outline">
        Open panel
      </Button>
    </FloatingPanelTrigger>
    <FloatingPanelContext>
      {(fp) => (
        <p className="text-muted-foreground text-xs">
          Panel is{" "}
          <span className="font-medium text-foreground">
            {fp.open ? "open" : "closed"}
          </span>
          .
        </p>
      )}
    </FloatingPanelContext>
    <FloatingPanelPopup>
      <FloatingPanelDragTrigger>
        <FloatingPanelHeader>
          <FloatingPanelTitle>
            <GripVerticalIcon className="size-4 shrink-0 text-muted-foreground" />
            Context
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
        <p>
          Status above comes from{" "}
          <code className="rounded bg-muted px-1 py-px">
            FloatingPanelContext
          </code>
          .
        </p>
      </FloatingPanelBody>
    </FloatingPanelPopup>
  </FloatingPanel>
);

export default FloatingPanelContextDemo;
