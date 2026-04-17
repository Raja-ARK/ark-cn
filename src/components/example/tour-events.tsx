import { useState } from "react";
import {
  TourFrame,
  TourLaunchButton,
  tourStageClass,
  tourTargetClass,
  useTour,
} from "@/components/ui/tour";

const TourEventsDemo = () => {
  const [logs, setLogs] = useState<string[]>([]);

  const pushLog = (message: string) => {
    setLogs((current) => [...current.slice(-5), message]);
  };

  const tour = useTour({
    steps: [
      {
        id: "step-1",
        type: "tooltip",
        arrow: true,
        title: "Event stream",
        description: "Every step change writes to the log.",
        target: () => document.querySelector("#tour-events-1"),
        actions: [{ label: "Next", action: "next" }],
      },
      {
        id: "step-2",
        type: "tooltip",
        arrow: true,
        title: "Lifecycle hooks",
        description: "Status changes are useful for analytics and onboarding.",
        target: () => document.querySelector("#tour-events-2"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "step-3",
        type: "tooltip",
        arrow: true,
        title: "Finish event",
        description: "Dismiss the tour to emit the closed status.",
        target: () => document.querySelector("#tour-events-3"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Finish", action: "dismiss" },
        ],
      },
    ],
    onStepChange: (details) => {
      pushLog(`step -> ${details.stepId}`);
    },
    onStatusChange: (details) => {
      pushLog(`status -> ${details.status}`);
    },
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton
        label="Start tracked tour"
        onClick={() => {
          setLogs([]);
          tour.start();
        }}
      />
      <div className="grid gap-2 sm:grid-cols-3">
        <div className={tourTargetClass} id="tour-events-1">
          Trigger 1
        </div>
        <div className={tourTargetClass} id="tour-events-2">
          Trigger 2
        </div>
        <div className={tourTargetClass} id="tour-events-3">
          Trigger 3
        </div>
      </div>
      <div className="rounded-xl border border-border/70 bg-muted/15 p-3 text-xs">
        <p className="mb-2 font-medium text-foreground">Event log</p>
        <div className="space-y-1 font-mono text-muted-foreground">
          {logs.length ? (
            logs.map((log, index) => <p key={`${log}-${index}`}>{log}</p>)
          ) : (
            <p>Start the tour to see lifecycle events.</p>
          )}
        </div>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourEventsDemo;
