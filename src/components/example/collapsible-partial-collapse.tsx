import { ChevronDownIcon } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleIndicator,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const CollapsiblePartialCollapse = () => {
  return (
    <Collapsible collapsedHeight="84px" className="w-full max-w-md">
      <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border border-border px-3 py-2 text-left font-medium text-sm transition-colors hover:bg-muted">
        Read more
        <CollapsibleIndicator
          className="text-muted-foreground transition-transform data-[state=open]:rotate-180"
          aria-hidden
        >
          <ChevronDownIcon className="size-4" />
        </CollapsibleIndicator>
      </CollapsibleTrigger>
      <CollapsibleContent
        className="
          rounded-md px-3 py-2
          data-[state=open]:animate-none data-[state=closed]:animate-none
          transition-[height] duration-200 ease-out
          data-[state=closed]:data-has-collapsed-size:shadow-[inset_0_-12px_12px_-12px_rgba(0,0,0,0.35)]
        "
      >
        <div className="space-y-2 text-muted-foreground text-sm leading-relaxed">
          <p>
            Ark UI gives you headless primitives, while your app controls
            layout, typography, spacing, and motion.
          </p>
          <p>
            With partial collapse, users can preview a snippet without opening
            the whole section.
          </p>
          <p>
            This works well for long descriptions, changelogs, or expandable
            detail blocks in dense interfaces.
          </p>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsiblePartialCollapse;
