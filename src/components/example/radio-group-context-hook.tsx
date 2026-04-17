import {
  Radio,
  RadioGroup,
  useRadioGroupContext,
} from "@/components/ui/radio-group";

const RadioGroupContextHookDemo = () => {
  const ValueText = () => {
    const context = useRadioGroupContext();

    return (
      <p className="text-muted-foreground text-xs">
        useRadioGroupContext:{" "}
        <span className="font-medium text-foreground">{context.value}</span>
      </p>
    );
  };

  return (
    <RadioGroup className="max-w-xs" defaultValue="b">
      <ValueText />
      <Radio value="a">Option A</Radio>
      <Radio value="b">Option B</Radio>
    </RadioGroup>
  );
};

export default RadioGroupContextHookDemo;
