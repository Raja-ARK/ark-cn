import {
  Splitter,
  SplitterPanel,
  SplitterResizeTrigger,
} from "@/components/ui/splitter";

const SplitterBasicDemo = () => (
  <div className="h-48 w-full">
    <Splitter defaultSize={[40, 60]} panels={[{ id: "a" }, { id: "b" }]}>
      <SplitterPanel className="p-4" id="a">
        <p className="text-muted-foreground text-sm">Panel A</p>
      </SplitterPanel>
      <SplitterResizeTrigger id="a:b" withHandle />
      <SplitterPanel className="p-4" id="b">
        <p className="text-muted-foreground text-sm">Panel B</p>
      </SplitterPanel>
    </Splitter>
  </div>
);

export default SplitterBasicDemo;
