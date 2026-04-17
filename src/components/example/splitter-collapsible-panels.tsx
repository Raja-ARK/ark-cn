import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
} from "@/components/ui/splitter";

const SplitterCollapsiblePanelsDemo = () => (
  <div className="h-48 w-full">
    <Splitter
      defaultSize={[25, 75]}
      panels={[
        { id: "sidebar", collapsible: true, collapsedSize: 0, minSize: 15 },
        { id: "content", minSize: 30 },
      ]}
    >
      <SplitterPanel className="p-4" id="sidebar">
        <p className="text-muted-foreground text-sm">Collapsible sidebar</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="sidebar:content" withHandle />
      <SplitterPanel className="p-4" id="content">
        <p className="text-muted-foreground text-sm">Content</p>
      </SplitterPanel>
    </Splitter>
  </div>
);

export default SplitterCollapsiblePanelsDemo;
