import { InfoIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldInput,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverDescription,
  PopoverPopup,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

const PopoverWithFieldDemo = () => (
  <Field className="max-w-xs">
    <FieldLabel htmlFor="popover-field-note">Note</FieldLabel>
    <Popover>
      <div className="flex gap-2">
        <FieldInput asChild className="flex-1">
          <Input id="popover-field-note" placeholder="Focus the input..." />
        </FieldInput>
        <PopoverTrigger asChild>
          <Button size="icon" type="button" variant="outline">
            <InfoIcon className="size-4" />
          </Button>
        </PopoverTrigger>
      </div>
      <PopoverPopup className="w-72 max-w-[min(18rem,var(--available-width,18rem))]">
        <PopoverTitle>Field + popover</PopoverTitle>
        <PopoverDescription>
          Trigger sits beside FieldInput; useful for inline hints.
        </PopoverDescription>
      </PopoverPopup>
    </Popover>
    <FieldDescription>Pattern aligned with Field composition.</FieldDescription>
  </Field>
);

export default PopoverWithFieldDemo;
