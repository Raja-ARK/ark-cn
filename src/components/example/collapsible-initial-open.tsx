import { ChevronDownIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CollapsibleInitialOpen = () => {
  return (
    <Collapsible defaultOpen className="w-full max-w-md">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-left font-medium text-sm transition-colors hover:bg-muted">
        Quick start
        <CollapsibleIndicator
          className="text-muted-foreground transition-transform data-[state=open]:rotate-180"
          aria-hidden
        >
          <ChevronDownIcon className="size-4" />
        </CollapsibleIndicator>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md px-3 py-2">
        <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
          <p>
            Install the package and copy the primitive source into your app.
          </p>
          <p>
            Use{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              @ark-ui/react
            </code>{" "}
            for the underlying state machine behavior.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleInitialOpen;
