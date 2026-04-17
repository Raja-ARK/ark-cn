import {
  Segment,
  SegmentGroup,
  SegmentGroupContext,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupContextRenderDemo = () => (
  <SegmentGroupRoot className="max-w-md" defaultValue="react">
    <SegmentGroupContext>
      {(context) => (
        <p className="text-muted-foreground text-xs">
          SegmentGroupContext:{" "}
          <span className="font-medium text-foreground">{context.value}</span>
        </p>
      )}
    </SegmentGroupContext>
    <SegmentGroup>
      <Segment value="react">React</Segment>
      <Segment value="solid">Solid</Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupContextRenderDemo;
