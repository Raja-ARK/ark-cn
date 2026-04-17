import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupWithLabelDemo = () => (
  <SegmentGroupRoot className="w-full max-w-md" defaultValue="next">
    <SegmentGroup>
      <Segment value="next">Next.js</Segment>
      <Segment value="vite">Vite</Segment>
      <Segment value="astro">Astro</Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupWithLabelDemo;
