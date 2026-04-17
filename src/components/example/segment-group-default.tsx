import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupDefaultDemo = () => (
  <SegmentGroupRoot className="max-w-md" defaultValue="react" variant="default">
    <SegmentGroup>
      <Segment value="react">React</Segment>
      <Segment value="solid">Solid</Segment>
      <Segment value="vue">Vue</Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupDefaultDemo;
