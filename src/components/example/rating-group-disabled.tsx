import {
  RatingGroup,
  RatingGroupLabel,
  RatingStars,
} from "@/components/ui/rating-group";

const RatingGroupDisabled = () => (
  <RatingGroup defaultValue={2} disabled>
    <RatingGroupLabel>Label</RatingGroupLabel>
    <RatingStars />
  </RatingGroup>
);

export default RatingGroupDisabled;
