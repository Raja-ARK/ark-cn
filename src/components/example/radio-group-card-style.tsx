import { Radio, RadioGroup } from "@/components/ui/radio-group";

const RadioGroupCardStyleDemo = () => (
  <RadioGroup className="max-w-md gap-3" defaultValue="email">
    <Radio
      className="flex w-full items-stretch rounded-lg border border-border p-3 transition-colors hover:bg-accent/50 data-[state=checked]:border-primary/48 data-[state=checked]:bg-accent/50"
      value="email"
    >
      <span className="flex flex-col gap-1 ps-0.5">
        <span className="font-medium">Email</span>
        <span className="text-muted-foreground text-xs">
          Receive notifications via email.
        </span>
      </span>
    </Radio>
    <Radio
      className="flex w-full items-stretch rounded-lg border border-border p-3 transition-colors hover:bg-accent/50 data-[state=checked]:border-primary/48 data-[state=checked]:bg-accent/50"
      value="sms"
    >
      <span className="flex flex-col gap-1 ps-0.5">
        <span className="font-medium">SMS</span>
        <span className="text-muted-foreground text-xs">
          Receive notifications via text message.
        </span>
      </span>
    </Radio>
  </RadioGroup>
);

export default RadioGroupCardStyleDemo;
