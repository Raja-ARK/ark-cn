import {
  TourFrame,
  TourLaunchButton,
  tourStageClass,
  tourTargetClass,
  useTour,
} from "@/components/ui/tour";

const TourSkipDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "step-1",
        type: "tooltip",
        arrow: true,
        title: "Collections",
        description: "Users can skip the tour from the very first step.",
        target: () => document.querySelector("#tour-skip-1"),
        actions: [
          { label: "Skip", action: "dismiss" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-2",
        type: "tooltip",
        arrow: true,
        title: "Saved views",
        description:
          "Keep skip available even mid-tour so exits are frictionless.",
        target: () => document.querySelector("#tour-skip-2"),
        actions: [
          { label: "Skip", action: "dismiss" },
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-3",
        type: "tooltip",
        arrow: true,
        title: "Shortcuts",
        description: "The last step can finish normally.",
        target: () => document.querySelector("#tour-skip-3"),
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
      <div className="grid gap-2 sm:grid-cols-3">
        <div className={tourTargetClass} id="tour-skip-1">
          Collections
        </div>
        <div className={tourTargetClass} id="tour-skip-2">
          Views
        </div>
        <div className={tourTargetClass} id="tour-skip-3">
          Shortcuts
        </div>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourSkipDemo;
