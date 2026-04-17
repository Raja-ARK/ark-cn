import { MinusIcon, PlusIcon } from "lucide-react";
import {
  Accordion,
  AccordionContext,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionCustomIndicatorDemo = () => {
  return (
    <Accordion collapsible defaultValue={["a"]} className="w-full max-w-md">
      <AccordionContext>
        {({ value }) => {
          return (
            <>
              <AccordionItem value="a">
                <AccordionTrigger
                  indicator={
                    value.includes("a") ? (
                      <MinusIcon className="pointer-events-none size-4 opacity-80" />
                    ) : (
                      <PlusIcon className="pointer-events-none size-4 opacity-80" />
                    )
                  }
                >
                  Custom indicator
                </AccordionTrigger>
                <AccordionPanel>
                  Pass any{" "}
                  <code className="rounded bg-muted px-1 text-xs">
                    ReactNode
                  </code>{" "}
                  to the{" "}
                  <code className="rounded bg-muted px-1 text-xs">
                    indicator
                  </code>{" "}
                  prop on{" "}
                  <code className="rounded bg-muted px-1 text-xs">
                    AccordionTrigger
                  </code>
                  . Rotation styles still apply to the indicator wrapper.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem value="b">
                <AccordionTrigger
                  indicator={
                    value.includes("b") ? (
                      <MinusIcon className="pointer-events-none size-4 opacity-80" />
                    ) : (
                      <PlusIcon className="pointer-events-none size-4 opacity-80" />
                    )
                  }
                >
                  Default chevron
                </AccordionTrigger>
                <AccordionPanel>
                  Omit{" "}
                  <code className="rounded bg-muted px-1 text-xs">
                    indicator
                  </code>{" "}
                  to use the built-in chevron.
                </AccordionPanel>
              </AccordionItem>
            </>
          );
        }}
      </AccordionContext>
    </Accordion>
  );
};

export default AccordionCustomIndicatorDemo;
