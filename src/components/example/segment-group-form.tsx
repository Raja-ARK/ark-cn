import type { FormEvent } from "react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupFormDemo = () => {
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <form
      className="flex flex-col gap-3"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setSubmitted(String(formData.get("framework") ?? ""));
      }}
    >
      <SegmentGroupRoot
        className="max-w-md"
        defaultValue="vite"
        name="framework"
      >
        <SegmentGroup>
          <Segment value="next">Next.js</Segment>
          <Segment value="vite">Vite</Segment>
          <Segment value="astro">Astro</Segment>
        </SegmentGroup>
      </SegmentGroupRoot>
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

export default SegmentGroupFormDemo;
