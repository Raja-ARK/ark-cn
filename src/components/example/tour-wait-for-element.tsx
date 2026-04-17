import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  TourFrame,
  TourLaunchButton,
  tourStageClass,
  useTour,
  waitForElement,
  waitForEvent,
} from "@/components/ui/tour";

const baseItems = ["Inbox", "Drafts"];

const TourWaitForElementDemo = () => {
  const [items, setItems] = useState(baseItems);

  const resetItems = () => setItems(baseItems);

  const tour = useTour({
    steps: [
      {
        id: "intro",
        type: "dialog",
        title: "Dynamic content",
        description:
          "This example waits until a brand-new element is rendered on the page.",
        actions: [{ label: "Start", action: "next" }],
      },
      {
        id: "add-item",
        type: "tooltip",
        arrow: true,
        title: "Add a new item",
        description: "Click the button to create a fresh list row.",
        target: () => document.querySelector("#tour-element-add"),
        effect: ({ next, target, show }) => {
          show();
          const [promise, cancel] = waitForEvent(target, "click");
          promise.then(() => next());
          return cancel;
        },
      },
      {
        id: "new-item",
        type: "tooltip",
        arrow: true,
        title: "Found it",
        description:
          "The tour waited until the new row existed before opening.",
        target: () => document.querySelector("[data-tour-item='new']"),
        effect: ({ show }) => {
          const [promise, cancel] = waitForElement(
            () => document.querySelector("[data-tour-item='new']"),
            { timeout: 5000 },
          );
          promise.then(() => show());
          return () => cancel();
        },
        actions: [{ label: "Done", action: "dismiss" }],
      },
    ],
  });

  return (
    <div className={tourStageClass}>
      <div className="flex flex-wrap gap-2">
        <TourLaunchButton
          onClick={() => {
            resetItems();
            tour.start();
          }}
        />
        <Button
          id="tour-element-add"
          onClick={() =>
            setItems((current) => [...current, `Item ${current.length + 1}`])
          }
          type="button"
          variant="outline"
        >
          Add item
        </Button>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            className="rounded-xl border border-border/70 bg-muted/20 px-4 py-3 text-sm text-foreground"
            data-tour-item={
              index === items.length - 1 && items.length > 2 ? "new" : undefined
            }
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourWaitForElementDemo;
