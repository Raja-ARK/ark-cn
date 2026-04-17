import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupReadOnlyDemo = () => (
  <SegmentGroupRoot className="max-w-md" defaultValue="solid" readOnly>
    <SegmentGroup>
      <Segment value="react">React</Segment>
      <Segment value="solid">Solid</Segment>
      <Segment value="vue">Vue</Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupReadOnlyDemo;
