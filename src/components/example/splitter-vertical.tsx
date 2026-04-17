import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
} from "@/components/ui/splitter";

const SplitterVerticalDemo = () => (
  <div className="h-64 w-full">
    <Splitter
      defaultSize={[55, 45]}
      orientation="vertical"
      panels={[{ id: "top" }, { id: "bottom" }]}
    >
      <SplitterPanel className="p-4" id="top">
        <p className="text-muted-foreground text-sm">Top</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="top:bottom" withHandle />
      <SplitterPanel className="p-4" id="bottom">
        <p className="text-muted-foreground text-sm">Bottom</p>
      </SplitterPanel>
    </Splitter>
  </div>
);

export default SplitterVerticalDemo;
