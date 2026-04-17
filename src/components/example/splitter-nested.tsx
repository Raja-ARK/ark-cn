import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
} from "@/components/ui/splitter";

const SplitterNestedDemo = () => (
  <div className="h-64 w-full">
    <Splitter defaultSize={[35, 65]} panels={[{ id: "left" }, { id: "right" }]}>
      <SplitterPanel className="p-4" id="left">
        <p className="text-muted-foreground text-sm">Left</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="left:right" withHandle />
      <SplitterPanel className="p-0" id="right">
        <Splitter
          defaultSize={[60, 40]}
          orientation="vertical"
          panels={[{ id: "rtop" }, { id: "rbottom" }]}
          className="rounded-none"
        >
          <SplitterPanel className="p-4" id="rtop">
            <p className="text-muted-foreground text-sm">Right · Top</p>
          </SplitterPanel>
          <SplitterResizeTrigger id="rtop:rbottom" withHandle />
          <SplitterPanel className="p-4" id="rbottom">
            <p className="text-muted-foreground text-sm">Right · Bottom</p>
          </SplitterPanel>
        </Splitter>
      </SplitterPanel>
    </Splitter>
  </div>
);

export default SplitterNestedDemo;
