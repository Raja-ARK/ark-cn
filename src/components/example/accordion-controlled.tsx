import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionControlledDemo = () => {
  const [value, setValue] = useState<string[]>(["open"]);

  return (
    <div className="flex w-full max-w-md flex-col gap-3">
      <Accordion
        multiple
        collapsible
        value={value}
        onValueChange={(e) => setValue(e.value)}
        className="w-full"
      >
        <AccordionItem value="open">
          <AccordionTrigger>Controlled item</AccordionTrigger>
          <AccordionPanel>
            The open items are driven by React state via{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">value</code>{" "}
            and{" "}
            <code className="rounded bg-muted px-1 py-0.5 text-xs">
              onValueChange
            </code>
            .
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem value="other">
          <AccordionTrigger>Another item</AccordionTrigger>
          <AccordionPanel>
            Toggle panels and watch the summary below.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <p className="text-muted-foreground text-xs">
        Open:{" "}
        <span className="font-mono text-foreground">
          {value.length ? value.join(", ") : "none"}
        </span>
      </p>
    </div>
  );
};

export default AccordionControlledDemo;
