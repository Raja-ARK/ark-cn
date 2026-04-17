import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Radio,
  RadioGroup,
  RadioGroupLabel,
} from "@/components/ui/radio-group";

const RadioGroupFormDemo = () => {
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <form
      className="flex max-w-xs flex-col gap-3"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setSubmitted(String(formData.get("frameworks") ?? ""));
      }}
    >
      <RadioGroup name="frameworks" defaultValue="next">
        <RadioGroupLabel>Frameworks</RadioGroupLabel>
        <Radio value="next">Next.js</Radio>
        <Radio value="vite">Vite</Radio>
        <Radio value="astro">Astro</Radio>
      </RadioGroup>
      <Button type="submit">Submit</Button>
      {submitted ? (
        <p className="text-muted-foreground text-xs">
          Selected:{" "}
          <span className="font-medium text-foreground">{submitted}</span>
        </p>
      ) : null}
    </form>
  );
};

export default RadioGroupFormDemo;
