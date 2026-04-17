import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupItemsShortcutDemo = () => (
  <SegmentGroupRoot className="max-w-md" defaultValue="react">
    <SegmentGroup className="max-w-md">
      <Segment value="react">React</Segment>
      <Segment value="solid">Solid</Segment>
      <Segment value="svelte">Svelte</Segment>
      <Segment value="vue">Vue</Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupItemsShortcutDemo;
