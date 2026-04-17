import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupUnderlineTabsDemo = () => (
  <SegmentGroupRoot
    className="max-w-xl border-b"
    defaultValue="react"
    variant="underline"
  >
    <SegmentGroup>
      <Segment value="react">React</Segment>
      <Segment value="solid">Solid</Segment>
      <Segment value="svelte">Svelte</Segment>
      <Segment value="vue">Vue</Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupUnderlineTabsDemo;
