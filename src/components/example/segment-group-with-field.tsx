import { Field, FieldDescription, FieldLabel } from "@/components/ui/field";
import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupWithFieldDemo = () => (
  <Field className="max-w-md gap-3">
    <FieldLabel>View</FieldLabel>
    <SegmentGroupRoot defaultValue="month" name="view-field">
      <SegmentGroup>
        <Segment value="month">Month</Segment>
        <Segment value="week">Week</Segment>
        <Segment value="day">Day</Segment>
      </SegmentGroup>
    </SegmentGroupRoot>
    <FieldDescription>
      Pick how dates are shown in the calendar.
    </FieldDescription>
  </Field>
);

export default SegmentGroupWithFieldDemo;
