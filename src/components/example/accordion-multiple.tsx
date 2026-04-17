import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionMultipleDemo = () => {
  return (
    <Accordion
      multiple
      collapsible
      defaultValue={["a", "b"]}
      className="w-full max-w-md"
    >
      <AccordionItem value="a">
        <AccordionTrigger>Section A</AccordionTrigger>
        <AccordionPanel>
          With{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">multiple</code>
          , more than one panel can be open at once.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="b">
        <AccordionTrigger>Section B</AccordionTrigger>
        <AccordionPanel>Content for section B.</AccordionPanel>
      </AccordionItem>
      <AccordionItem value="c">
        <AccordionTrigger>Section C</AccordionTrigger>
        <AccordionPanel>Content for section C.</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionMultipleDemo;
