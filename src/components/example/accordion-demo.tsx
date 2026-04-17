import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionDemo = () => {
  return (
    <Accordion
      collapsible
      defaultValue={["basics"]}
      className="w-full max-w-md"
    >
      <AccordionItem value="basics">
        <AccordionTrigger>What is Ark CN?</AccordionTrigger>
        <AccordionPanel>
          Ark UI primitives styled like shadcn/ui—ready to paste into your app
          and theme with Tailwind.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="preview">
        <AccordionTrigger>How do previews work?</AccordionTrigger>
        <AccordionPanel>
          Drop a demo in{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">example/</code>{" "}
          and point{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-xs">
            ComponentPreview
          </code>{" "}
          at the file name.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionDemo;
