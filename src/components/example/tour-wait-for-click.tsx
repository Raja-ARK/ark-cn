import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  TourFrame,
  TourLaunchButton,
  tourStageClass,
  useTour,
  waitForEvent,
} from "@/components/ui/tour";

const TourWaitForClickDemo = () => {
  const [lastAction, setLastAction] = useState("none");

  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Interactive tour",
        description:
          "These steps wait for a real click before advancing automatically.",
        actions: [{ label: "Begin", action: "next" }],
      },
      {
        id: "create",
        type: "tooltip",
        arrow: true,
        title: "Click Create",
        description: "Press the Create button to continue.",
        target: () => document.querySelector("#tour-click-create"),
        effect: ({ next, target, show }) => {
          show();
          const [promise, cancel] = waitForEvent(target, "click");
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "publish",
        type: "tooltip",
        arrow: true,
        title: "Click Publish",
        description: "One more required action.",
        target: () => document.querySelector("#tour-click-publish"),
        effect: ({ next, target, show }) => {
          show();
          const [promise, cancel] = waitForEvent(target, "click");
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "archive",
        type: "tooltip",
        arrow: true,
        title: "Click Archive",
        description: "The last interaction completes the guided path.",
        target: () => document.querySelector("#tour-click-archive"),
        effect: ({ next, target, show }) => {
          show();
          const [promise, cancel] = waitForEvent(target, "click");
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "done",
        type: "dialog",
        title: "Workflow complete",
        description: "You triggered every required action.",
        actions: [{ label: "Close", action: "dismiss" }],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <TourLaunchButton
        label="Start interactive tour"
        onClick={() => tour.start()}
      />
      <div className="flex flex-wrap gap-2">
        <Button
          id="tour-click-create"
          onClick={() => setLastAction("create")}
          type="button"
          variant="outline"
        >
          Create
        </Button>
        <Button
          id="tour-click-publish"
          onClick={() => setLastAction("publish")}
          type="button"
          variant="outline"
        >
          Publish
        </Button>
        <Button
          id="tour-click-archive"
          onClick={() => setLastAction("archive")}
          type="button"
          variant="outline"
        >
          Archive
        </Button>
      </div>
      <p className="text-muted-foreground text-xs">
        Last action:{" "}
        <span className="font-medium text-foreground">{lastAction}</span>
      </p>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourWaitForClickDemo;
