import { InfoIcon } from "lucide-react";
import {
  TourFrame,
  TourLaunchButton,
  tourStageClass,
  tourTargetClass,
  useTour,
} from "@/components/ui/tour";

const TourKeyboardNavigationDemo = () => {
  const tour = useTour({
    keyboardNavigation: true,
    steps: [
      {
        id: "step-1",
        type: "tooltip",
        arrow: true,
        title: "Arrow keys",
        description: "Press Right Arrow to move forward.",
        target: () => document.querySelector("#tour-keyboard-1"),
        actions: [{ label: "Next", action: "next" }],
      },
      {
        id: "step-2",
        type: "tooltip",
        arrow: true,
        title: "Go back",
        description: "Press Left Arrow to revisit the previous item.",
        target: () => document.querySelector("#tour-keyboard-2"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-3",
        type: "tooltip",
        arrow: true,
        title: "Escape closes",
        description: "Escape dismisses the tour from anywhere.",
        target: () => document.querySelector("#tour-keyboard-3"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton onClick={() => tour.start()} />
      <p className="inline-flex items-center gap-2 text-muted-foreground text-xs">
        <InfoIcon className="size-4" />
        Use Right Arrow, Left Arrow, and Escape while the tour is open.
      </p>
      <div className="grid gap-2 sm:grid-cols-3">
        <div className={tourTargetClass} id="tour-keyboard-1">
          Right
        </div>
        <div className={tourTargetClass} id="tour-keyboard-2">
          Left
        </div>
        <div className={tourTargetClass} id="tour-keyboard-3">
          Escape
        </div>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourKeyboardNavigationDemo;
