import {
  PinInputContext,
  PinInputLabel,
  PinInputRoot,
  PinInputSlots,
} from "@/components/ui/pin-input";

const PinInputContextDemo = () => (
  <PinInputRoot className="max-w-md grid justify-center" count={6}>
    <PinInputContext>
      {(context) => (
        <p className="text-muted-foreground text-xs">
          Context:{" "}
          <span className="font-medium text-foreground">
            {context.complete ? "complete" : "in progress"}
          </span>
          {" - "}
          <span className="font-mono">{context.valueAsString || "-"}</span>
        </p>
      )}
    </PinInputContext>
    <PinInputLabel>Render prop</PinInputLabel>
    <PinInputSlots variant="grouped" />
  </PinInputRoot>
);

export default PinInputContextDemo;
