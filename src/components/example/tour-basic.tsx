import { Button } from "@/components/ui/button";
import {
  TourFrame,
  TourLaunchButton,
  tourStageClass,
  useTour,
} from "@/components/ui/tour";

const TourBasicDemo = () => {
  const tour = useTour({
    steps: [
      {
        id: "welcome",
        type: "dialog",
        title: "Welcome aboard",
        description:
          "This starter tour introduces the main actions in the workspace.",
        actions: [{ label: "Start tour", action: "next" }],
      },
      {
        id: "upload",
        type: "tooltip",
        arrow: true,
        title: "Upload files",
        description: "Add assets or docs from your computer.",
        target: () => document.querySelector("#tour-basic-upload"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "save",
        type: "tooltip",
        arrow: true,
        title: "Save changes",
        description: "Persist the current draft before sharing it.",
        target: () => document.querySelector("#tour-basic-save"),
        actions: [
          { label: "Back", action: "prev" },
          { label: "Next", action: "next" },
        ],
      },
      {
        id: "more",
        type: "tooltip",
        arrow: true,
        title: "More options",
        description: "Advanced actions stay tucked away in the overflow menu.",
        target: () => document.querySelector("#tour-basic-more"),
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
      <div className="flex flex-wrap gap-2">
        <Button id="tour-basic-upload" type="button" variant="outline">
          Upload
        </Button>
        <Button id="tour-basic-save" type="button" variant="outline">
          Save
        </Button>
        <Button id="tour-basic-more" type="button" variant="outline">
          More
        </Button>
      </div>
      <TourFrame tour={tour} />
    </div>
  );
};

export default TourBasicDemo;
