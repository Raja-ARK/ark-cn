import {
  TourFrame,
  TourLaunchButton,
  tourStageClass,
  tourTargetClass,
  useTour,
} from "@/components/ui/tour";
import { cn } from "@/lib/utils";

const TourAsyncDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Async loading",
        description:
          "This step waits for async data, then updates the copy before showing.",
        actions: [{ label: "Continue", action: "next" }],
      },
      {
        id: "profile",
        type: "tooltip",
        arrow: true,
        title: "Loading profile...",
        description: "Pulling usage metrics from the workspace service.",
        target: () => document.querySelector("#tour-async-card"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
        effect: ({ show, update }) => {
          const timeout = window.setTimeout(() => {
            update({
              title: "Workspace owner",
              description:
                "Ada shipped 12 docs, 4 demos, and 3 shared templates this week.",
            });
            show();
          }, 900);

          return () => window.clearTimeout(timeout);
        },
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton label="Start async tour" onClick={() => tour.start()} />
      <div className={cn(tourTargetClass, "max-w-sm")} id="tour-async-card">
        Profile summary card
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourAsyncDemo;
