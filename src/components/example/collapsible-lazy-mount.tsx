import { ChevronDownIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CollapsibleLazyMount = () => {
  return (
    <Collapsible lazyMount unmountOnExit className="w-full max-w-md">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-left font-medium text-sm transition-colors hover:bg-muted">
        Session details
        <CollapsibleIndicator
          className="text-muted-foreground transition-transform data-[state=open]:rotate-180"
          aria-hidden
        >
          <ChevronDownIcon className="size-4" />
        </CollapsibleIndicator>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md px-3 py-2">
        <p className="text-muted-foreground text-sm leading-relaxed">
          This content mounts only when opened, and is removed from the DOM when
          collapsed.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleLazyMount;
