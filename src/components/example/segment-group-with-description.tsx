import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupWithDescriptionDemo = () => (
  <SegmentGroupRoot className="max-w-lg" defaultValue="free">
    <SegmentGroup>
      <Segment value="free">
        <span className="flex flex-col gap-0.5">
          <span className="font-medium">Free</span>
          <span className="font-normal text-[0.7rem] text-muted-foreground leading-snug">
            Basic features for personal use.
          </span>
        </span>
      </Segment>
      <Segment value="pro">
        <span className="flex flex-col gap-0.5">
          <span className="font-medium">Pro</span>
          <span className="font-normal text-[0.7rem] text-muted-foreground leading-snug">
            Advanced tools for teams.
          </span>
        </span>
      </Segment>
    </SegmentGroup>
  </SegmentGroupRoot>
);

export default SegmentGroupWithDescriptionDemo;
