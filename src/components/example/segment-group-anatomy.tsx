import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupAnatomyDemo = () => (
  <SegmentGroupRoot className="max-w-md" defaultValue="1">
    <SegmentGroup>
      <Segment value="1">One</Segment>
      <Segment value="2">Two</Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupAnatomyDemo;
