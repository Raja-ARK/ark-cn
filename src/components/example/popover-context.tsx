import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContext,
  PopoverDescription,
  PopoverIndicator,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverContextDemo = () => (
  <Popover>
    <PopoverContext>
      {(ctx) => (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-muted-foreground text-xs">
            <span>Context open:</span>
            <span className="font-medium text-foreground">
              {String(ctx.open)}
            </span>
          </div>
          <PopoverTrigger asChild>
            <Button className="gap-1" type="button" variant="outline">
              Toggle
              <PopoverIndicator>
                {ctx.open ? (
                  <ChevronUpIcon aria-hidden className="size-3.5" />
                ) : (
                  <ChevronDownIcon aria-hidden className="size-3.5" />
                )}
              </PopoverIndicator>
            </Button>
          </PopoverTrigger>
        </div>
      )}
    </PopoverContext>
    <PopoverPopup>
      <PopoverTitle>Context + indicator</PopoverTitle>
      <PopoverDescription>
        <code className="text-foreground">PopoverContext</code> provides state;
        chevron sits in{" "}
        <code className="text-foreground">PopoverIndicator</code>.
      </PopoverDescription>
    </PopoverPopup>
  </Popover>
);

export default PopoverContextDemo;
