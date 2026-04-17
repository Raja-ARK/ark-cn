import { type FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  RatingGroup,
  RatingGroupLabel,
  RatingStars,
} from "@/components/ui/rating-group";

const RatingGroupForm = () => {
  const [submitted, setSubmitted] = useState<string | null>(null);

  return (
    <form
      className="flex max-w-xs flex-col gap-3"
      onSubmit={(event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        setSubmitted(String(formData.get("review") ?? ""));
      }}
    >
      <RatingGroup defaultValue={5} name="review">
        <RatingGroupLabel>Label</RatingGroupLabel>
        <RatingStars />
      </RatingGroup>
      <Button size="sm" type="submit" variant="default">
        Submit
      </Button>
      {submitted !== null ? (
        <p className="text-muted-foreground text-xs">
          Rating value:{" "}
          <span className="font-medium text-foreground">{submitted}</span>
        </p>
      ) : null}
    </form>
  );
};

export default RatingGroupForm;
