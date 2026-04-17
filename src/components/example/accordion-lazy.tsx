import {
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AccordionLazyDemo = () => {
  return (
    <Accordion
      lazyMount
      unmountOnExit
      collapsible
      defaultValue={["first"]}
      className="w-full max-w-md"
    >
      <AccordionItem value="first">
        <AccordionTrigger>First (mounted)</AccordionTrigger>
        <AccordionPanel>
          This panel mounts when opened. With{" "}
          <code className="rounded bg-muted px-1 text-xs">unmountOnExit</code>,
          it unmounts when collapsed so heavy children are not left in the tree.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem value="second">
        <AccordionTrigger>Second (lazy)</AccordionTrigger>
        <AccordionPanel>
          Content for the second item is not rendered until you expand this
          section.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionLazyDemo;
