import { Button } from "@/components/ui/button";
import {
  Segment,
  SegmentGroup,
  SegmentGroupRootProvider,
  useSegmentGroup,
} from "@/components/ui/segment-group";

const SegmentGroupRootProviderDemo = () => {
  const store = useSegmentGroup({ defaultValue: "solid" });

  return (
    <div className="flex flex-col gap-3">
      <SegmentGroupRootProvider value={store}>
        <SegmentGroup>
          <Segment value="react">React</Segment>
          <Segment value="solid">Solid</Segment>
          <Segment value="vue">Vue</Segment>
        </SegmentGroup>
      </SegmentGroupRootProvider>
      <Button
        onClick={() => {
          store.setValue("vue");
        }}
        type="button"
        variant="outline"
      >
        Set to Vue
      </Button>
    </div>
  );
};

export default SegmentGroupRootProviderDemo;
