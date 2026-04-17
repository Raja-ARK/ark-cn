import { useState } from "react";
import {
  RatingGroup,
  RatingGroupLabel,
  RatingStars,
} from "@/components/ui/rating-group";

const RatingGroupControlled = () => {
  const [value, setValue] = useState(0);

  return (
    <div className="flex flex-col gap-2">
      <RatingGroup
        value={value}
        onValueChange={({ value: nextValue }) => {
          setValue(nextValue);
        }}
      >
        <RatingGroupLabel>Label</RatingGroupLabel>
        <RatingStars />
      </RatingGroup>
      <p className="text-muted-foreground text-xs">
        Value:{" "}
        <span className="font-medium tabular-nums text-foreground">
          {value}
        </span>
      </p>
    </div>
  );
};

export default RatingGroupControlled;
