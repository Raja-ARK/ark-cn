import {
  Radio,
  RadioGroup,
  RadioGroupContext,
} from "@/components/ui/radio-group";

const RadioGroupContextRenderDemo = () => (
  <RadioGroup className="max-w-xs" defaultValue="next">
    <RadioGroupContext>
      {(context) => (
        <p className="text-muted-foreground text-xs">
          RadioGroupContext:{" "}
          <span className="font-medium text-foreground">{context.value}</span>
        </p>
      )}
    </RadioGroupContext>
    <Radio value="next">Next.js</Radio>
    <Radio value="vite">Vite</Radio>
  </RadioGroup>
);

export default RadioGroupContextRenderDemo;
