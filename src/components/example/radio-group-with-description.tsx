import { Radio, RadioGroup } from "@/components/ui/radio-group";

const RadioGroupWithDescriptionDemo = () => (
  <RadioGroup className="max-w-sm" defaultValue="r-1">
    <Radio value="r-1">
      <span className="flex flex-col gap-1">
        <span className="font-medium">Free</span>
        <span className="text-muted-foreground text-xs">
          Basic features for personal use.
        </span>
      </span>
    </Radio>
    <Radio value="r-2">
      <span className="flex flex-col gap-1">
        <span className="font-medium">Pro</span>
        <span className="text-muted-foreground text-xs">
          Advanced tools for professionals.
        </span>
      </span>
    </Radio>
  </RadioGroup>
);

export default RadioGroupWithDescriptionDemo;
