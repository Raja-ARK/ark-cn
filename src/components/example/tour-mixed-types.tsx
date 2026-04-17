import {
  TourFrame,
  TourLaunchButton,
  tourStageClass,
  tourTargetClass,
  useTour,
} from "@/components/ui/tour";
import { cn } from "@/lib/utils";

const TourMixedTypesDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Three step types",
        description:
          "This sequence mixes dialog, tooltip, and floating tour steps in one flow.",
        actions: [{ label: "Start tour", action: "next" }],
      },
      {
        id: "anchor",
        type: "tooltip",
        arrow: true,
        title: "Anchored tooltip",
        description: "Tooltips are perfect for calling out a concrete control.",
        target: () => document.querySelector("#tour-mixed-anchor"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "floating",
        type: "floating",
        placement: "bottom-end",
        title: "Floating panel",
        description:
          "Floating steps can introduce ambient UI without needing a target node.",
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "done",
        type: "dialog",
        title: "Done",
        description: "You’ve now seen the core Tour presentation modes.",
        actions: [{ label: "Close", action: "dismiss" }],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton onClick={() => tour.start()} />
      <div className={cn(tourTargetClass, "max-w-sm")} id="tour-mixed-anchor">
        Product analytics card
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourMixedTypesDemo;
