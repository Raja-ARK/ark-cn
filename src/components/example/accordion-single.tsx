import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionSingleDemo = () => {
  return (
    <Accordion
      collapsible
      multiple={false}
      defaultValue={["one"]}
      className="w-full max-w-md"
    >
      <AccordionItem value="one">
        <AccordionTrigger>First section</AccordionTrigger>
        <AccordionPanel>
          Only one section stays open at a time when{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            multiple=&#123;false&#125;
          </code>{" "}
          (the default).
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="two">
        <AccordionTrigger>Second section</AccordionTrigger>
        <AccordionPanel>Content for the second item.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="three">
        <AccordionTrigger>Third section</AccordionTrigger>
        <AccordionPanel>Content for the third item.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionSingleDemo;
