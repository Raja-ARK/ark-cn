import {
  TourFrame,
  TourLaunchButton,
  tourStageClass,
  tourTargetClass,
  useTour,
} from "@/components/ui/tour";

const TourProgressBarDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "step-1",
        type: "tooltip",
        arrow: true,
        title: "Step one",
        description: "The progress bar fills as you move through the tour.",
        target: () => document.querySelector("#tour-progress-1"),
        actions: [{ label: "Next", action: "next" }],
      },
      {
        id: "step-2",
        type: "tooltip",
        arrow: true,
        title: "Step two",
        description: "Halfway markers help users understand remaining effort.",
        target: () => document.querySelector("#tour-progress-2"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-3",
        type: "tooltip",
        arrow: true,
        title: "Step three",
        description: "A compact bar fits nicely inside the popup chrome.",
        target: () => document.querySelector("#tour-progress-3"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-4",
        type: "tooltip",
        arrow: true,
        title: "All set",
        description: "Last step reached.",
        target: () => document.querySelector("#tour-progress-4"),
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
      <div className="grid grid-cols-2 gap-2">
        {["1", "2", "3", "4"].map((step) => (
          <div
            className={tourTargetClass}
            id={`tour-progress-${step}`}
            key={step}
          >
            Step {step}
          </div>
        ))}
      </div>
      <TourFrame showProgressBar tour={tour} />
    </div>
  );
};

export default TourProgressBarDemo;
