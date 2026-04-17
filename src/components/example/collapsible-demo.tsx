import { ChevronDownIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CollapsibleDemo = () => {
  return (
    <Collapsible className="w-full max-w-md">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-left font-medium text-sm transition-colors hover:bg-muted">
        What is Ark UI?
        <CollapsibleIndicator
          className="text-muted-foreground transition-transform data-[state=open]:rotate-180"
          aria-hidden
        >
          <ChevronDownIcon className="size-4" />
        </CollapsibleIndicator>
      </CollapsibleTrigger>
      <CollapsibleContent className="rounded-md px-3 py-2">
        <p className="text-muted-foreground text-sm leading-relaxed">
          Ark UI provides accessible, headless primitives you can style with
          your own design system.
        </p>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleDemo;
