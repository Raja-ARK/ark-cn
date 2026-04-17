import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupOrientationDemo = () => (
  <div className="flex max-w-xs flex-col gap-3">
    <SegmentGroupRoot defaultValue="a" orientation="vertical" variant="default">
      <SegmentGroup>
        <Segment value="a">Alpha</Segment>
        <Segment value="b">Beta</Segment>
        <Segment value="c">Gamma</Segment>
      </SegmentGroup>
    </SegmentGroupRoot>
  </div>
);

export default SegmentGroupOrientationDemo;
