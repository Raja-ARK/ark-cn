import { ChevronDownIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const triggerClassName =
  "flex w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-left font-medium text-sm transition-colors hover:bg-muted";

const indicatorClassName =
  "text-muted-foreground transition-transform data-[state=open]:rotate-180";

const CollapsibleNested = () => {
  return (
    <Collapsible className="w-full max-w-md">
      <CollapsibleTrigger className={triggerClassName}>
        Getting started
        <CollapsibleIndicator className={indicatorClassName} aria-hidden>
          <ChevronDownIcon className="size-4" />
        </CollapsibleIndicator>
      </CollapsibleTrigger>

      <CollapsibleContent className="space-y-2 rounded-md px-3 py-2">
        <p className="text-muted-foreground text-sm">
          Expand child sections for focused details.
        </p>

        <Collapsible className="w-full">
          <CollapsibleTrigger className={triggerClassName}>
            Installation
            <CollapsibleIndicator className={indicatorClassName} aria-hidden>
              <ChevronDownIcon className="size-4" />
            </CollapsibleIndicator>
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-md px-3 py-2">
            <p className="text-muted-foreground text-sm">
              Install{" "}
              <code className="rounded bg-muted px-1 py-0.5 text-xs">
                @ark-ui/react
              </code>{" "}
              and compose with your own styles.
            </p>
          </CollapsibleContent>
        </Collapsible>

        <Collapsible className="w-full">
          <CollapsibleTrigger className={triggerClassName}>
            Styling
            <CollapsibleIndicator className={indicatorClassName} aria-hidden>
              <ChevronDownIcon className="size-4" />
            </CollapsibleIndicator>
          </CollapsibleTrigger>
          <CollapsibleContent className="rounded-md px-3 py-2">
            <p className="text-muted-foreground text-sm">
              Use Tailwind or CSS modules to style each nested layer
              differently.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleNested;
