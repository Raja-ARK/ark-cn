import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
} from "@/components/ui/splitter";

const SplitterMultiplePanelsDemo = () => (
  <div className="h-48 w-full">
    <Splitter
      defaultSize={[20, 50, 30]}
      panels={[
        { id: "nav", minSize: 12 },
        { id: "main", minSize: 30 },
        { id: "aside", collapsible: true, collapsedSize: 0, minSize: 15 },
      ]}
    >
      <SplitterPanel className="p-4" id="nav">
        <p className="text-muted-foreground text-sm">Nav</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="nav:main" withHandle />
      <SplitterPanel className="p-4" id="main">
        <p className="text-muted-foreground text-sm">Main</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="main:aside" withHandle />
      <SplitterPanel className="p-4" id="aside">
        <p className="text-muted-foreground text-sm">Aside (collapsible)</p>
      </SplitterPanel>
    </Splitter>
  </div>
);

export default SplitterMultiplePanelsDemo;
