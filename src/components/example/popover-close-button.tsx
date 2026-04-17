import { XIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverCloseTrigger,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverCloseButtonDemo = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button type="button" variant="outline">
        Notifications
      </Button>
    </PopoverTrigger>
    <PopoverPopup className="relative w-80 max-w-[min(20rem,var(--available-width,20rem))]">
      <PopoverCloseTrigger
        aria-label="Close"
        asChild
        className="absolute inset-e-2 top-2"
      >
        <Button size="icon" type="button" variant="ghost">
          <XIcon className="size-4" />
        </Button>
      </PopoverCloseTrigger>
      <div className="pe-8">
        <PopoverTitle className="text-base">Notifications</PopoverTitle>
        <PopoverDescription>
          You are all caught up. Good job!
        </PopoverDescription>
      </div>
      <PopoverCloseTrigger asChild className="mt-3">
        <Button type="button" variant="outline">
          Close
        </Button>
      </PopoverCloseTrigger>
    </PopoverPopup>
  </Popover>
);

export default PopoverCloseButtonDemo;
