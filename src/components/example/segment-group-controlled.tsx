import { useState } from "react";

import {
  Segment,
  SegmentGroup,
  SegmentGroupRoot,
} from "@/components/ui/segment-group";

const SegmentGroupControlledDemo = () => {
  const [value, setValue] = useState<string | null>("react");

  return (
    <div className="flex flex-col gap-2">
      <p className="text-muted-foreground text-xs">
        Value: <span className="font-medium text-foreground">{value}</span>
      </p>
      <SegmentGroupRoot
        value={value}
        onValueChange={({ value }) => setValue(value)}
      >
        <SegmentGroup>
          <Segment value="react">React</Segment>
          <Segment value="solid">Solid</Segment>
          <Segment value="vue">Vue</Segment>
        </SegmentGroup>
      </SegmentGroupRoot>
    </div>
  );
};

export default SegmentGroupControlledDemo;
