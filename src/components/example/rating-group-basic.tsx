import {
  RatingGroup,
  RatingGroupLabel,
  RatingStars,
} from "@/components/ui/rating-group";

const RatingGroupBasic = () => (
  <RatingGroup defaultValue={3}>
    <RatingGroupLabel>Label</RatingGroupLabel>
    <RatingStars />
  </RatingGroup>
);

export default RatingGroupBasic;
