import {
  RatingGroup,
  RatingGroupLabel,
  RatingStars,
} from "@/components/ui/rating-group";

const RatingGroupDemo = () => (
  <RatingGroup count={5} defaultValue={3}>
    <RatingGroupLabel>Rate this component</RatingGroupLabel>
    <RatingStars />
  </RatingGroup>
);

export default RatingGroupDemo;
