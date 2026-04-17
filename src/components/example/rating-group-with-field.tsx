import { Field, FieldDescription } from "@/components/ui/field";
import {
  RatingGroup,
  RatingGroupLabel,
  RatingStars,
} from "@/components/ui/rating-group";

const RatingGroupWithField = () => (
  <Field className="max-w-md">
    <RatingGroup count={5} defaultValue={2}>
      <RatingGroupLabel>Label</RatingGroupLabel>
      <RatingStars />
    </RatingGroup>
    <FieldDescription>
      Helper text below the group (Ark <code>with-field</code> example).
    </FieldDescription>
  </Field>
);

export default RatingGroupWithField;
