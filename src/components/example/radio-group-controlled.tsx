import { useState } from "react";
import { Radio, RadioGroup } from "@/components/ui/radio-group";

const RadioGroupControlled = () => {
  const [value, setValue] = useState<string | null>("next");

  return (
    <div className="flex max-w-xs flex-col gap-2">
      <p className="text-muted-foreground text-xs">
        Value: <span className="font-medium text-foreground">{value}</span>
      </p>
      <RadioGroup
        value={value}
        onValueChange={({ value: next }) => setValue(next)}
      >
        <Radio value="next">Next.js</Radio>
        <Radio value="vite">Vite</Radio>
        <Radio value="astro">Astro</Radio>
      </RadioGroup>
    </div>
  );
};

export default RadioGroupControlled;
