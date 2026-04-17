import {
  RatingGroup,
  RatingGroupLabel,
  RatingStars,
} from "@/components/ui/rating-group";

const RatingGroupHalf = () => (
  <RatingGroup allowHalf defaultValue={2.5}>
    <RatingGroupLabel>Label</RatingGroupLabel>
    <RatingStars withHalf />
  </RatingGroup>
);

export default RatingGroupHalf;
