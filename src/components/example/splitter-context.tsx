import {
  Splitter,
  SplitterContext,
  SplitterPanel,
  SplitterResizeTrigger,
} from "@/components/ui/splitter";

const SplitterContextDemo = () => (
  <div className="flex w-full flex-col gap-3">
    <div className="h-44 w-full">
      <Splitter
        defaultSize={[50, 50]}
        panels={[{ id: "left" }, { id: "right" }]}
      >
        <SplitterPanel className="p-4" id="left">
          <SplitterContext>
            {(api) => (
              <p className="text-muted-foreground text-sm">
                Dragging:{" "}
                <span className="font-medium text-foreground">
                  {String(api.dragging)}
                </span>
              </p>
            )}
          </SplitterContext>
        </SplitterPanel>
        <SplitterResizeTrigger id="left:right" withHandle />
        <SplitterPanel className="p-4" id="right">
          <SplitterContext>
            {(api) => (
              <p className="text-muted-foreground text-sm">
                Sizes:{" "}
                <span className="font-medium text-foreground">
                  {api.getSizes().join(" / ")}
                </span>
              </p>
            )}
          </SplitterContext>
        </SplitterPanel>
      </Splitter>
    </div>
    <p className="text-muted-foreground text-xs">
      SplitterContext exposes the API (e.g. dragging + getSizes()) under the
      Root.
    </p>
  </div>
);

export default SplitterContextDemo;
