import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupDisabledItemDemo = () => (
  <SegmentGroupRoot className="max-w-md" defaultValue="react">
    <SegmentGroup>
      <Segment value="react">React</Segment>
      <Segment disabled value="solid">
        Solid (disabled)
      </Segment>
      <Segment value="vue">Vue</Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupDisabledItemDemo;
