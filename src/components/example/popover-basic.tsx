import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

const PopoverBasicDemo = () => (
  <Popover>
    <PopoverTrigger asChild>
      <Button type="button" variant="outline">
        Open popover
      </Button>
    </PopoverTrigger>
    <PopoverPopup className="w-80 max-w-[min(20rem,var(--available-width,20rem))]">
      <div className="mb-4 flex flex-col gap-1">
        <PopoverTitle className="text-base">Send us feedback</PopoverTitle>
        <PopoverDescription>Let us know how we can improve.</PopoverDescription>
      </div>
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Field>
          <Textarea
            aria-label="Send feedback"
            id="popover-feedback"
            placeholder="How can we improve?"
          />
        </Field>
        <Button type="submit">Send feedback</Button>
      </form>
    </PopoverPopup>
  </Popover>
);

export default PopoverBasicDemo;
