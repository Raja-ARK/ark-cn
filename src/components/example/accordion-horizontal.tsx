import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionHorizontalDemo = () => {
  return (
    <Accordion
      orientation="horizontal"
      collapsible
      defaultValue={["two"]}
      className="w-full max-w-3xl data-[orientation=horizontal]:h-60"
    >
      <AccordionItem value="one">
        <AccordionTrigger>Overview</AccordionTrigger>
        <AccordionPanel className="border mr-4" containerClassName="p-4">
          Horizontal layout uses the root{" "}
          <code className="rounded bg-muted px-1 text-xs">orientation</code>{" "}
          prop. Triggers sit in a row; panels open beside them per Ark’s
          horizontal accordion behavior.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="two">
        <AccordionTrigger>Details</AccordionTrigger>
        <AccordionPanel className="border mr-4" containerClassName="p-4">
          Use ArrowLeft and ArrowRight to move focus between triggers when
          orientation is horizontal.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="three">
        <AccordionTrigger>Notes</AccordionTrigger>
        <AccordionPanel className="border mr-4" containerClassName="p-4">
          The root applies fixed height classes for horizontal mode so content
          can animate on the width axis.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionHorizontalDemo;
