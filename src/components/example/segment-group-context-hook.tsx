import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
  useSegmentGroupContext,
} from "@/components/ui/segment-group";

const Inner = () => {
  const context = useSegmentGroupContext();

  return (
    <p className="text-muted-foreground text-xs">
      useSegmentGroupContext:{" "}
      <span className="font-medium text-foreground">{context.value}</span>
    </p>
  );
};

const SegmentGroupContextHookDemo = () => (
  <SegmentGroupRoot className="max-w-md" defaultValue="b">
    <Inner />
    <SegmentGroup>
      <Segment value="a">A</Segment>
      <Segment value="b">B</Segment>
      <Segment value="c">C</Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupContextHookDemo;
