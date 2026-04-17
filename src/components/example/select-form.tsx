import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectList,
  SelectPopup,
  SelectTriggerField,
  SelectValue,
} from "@/components/ui/select";

const frameworks = [
  { label: "Next.js", value: "next" },
  { label: "Vite", value: "vite" },
  { label: "Astro", value: "astro" },
] as const;

const SelectFormDemo = () => {
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <form
      className="flex max-w-xs flex-col gap-3"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setSubmitted(String(formData.get("framework") ?? ""));
      }}
    >
      <Select
        aria-label="Framework"
        defaultValue={["next"]}
        items={frameworks}
        name="framework"
        required
      >
        <SelectTriggerField>
          <SelectValue placeholder="Select a framework" />
        </SelectTriggerField>
        <SelectPopup>
          <SelectList>
            {frameworks.map((item) => (
              <SelectItem key={item.value} item={item}>
                <SelectItemText>{item.label}</SelectItemText>
                <SelectItemIndicator />
              </SelectItem>
            ))}
          </SelectList>
        </SelectPopup>
      </Select>
      <Button type="submit">Submit</Button>
      {submitted ? (
        <p className="text-muted-foreground text-xs">
          framework:{" "}
          <span className="font-medium text-foreground">{submitted}</span>
        </p>
      ) : null}
    </form>
  );
};

export default SelectFormDemo;
