import { Swap, SwapIndicator } from "@/components/ui/swap";

const SwapDemo = () => (
  <Swap
    className="inline-flex h-10 w-16 items-center justify-center rounded-lg border border-border bg-muted"
    defaultChecked
  >
    <SwapIndicator
      className="font-medium text-sm data-[state=unchecked]:hidden"
      type="on"
    >
      ON
    </SwapIndicator>
    <SwapIndicator
      className="font-medium text-sm data-[state=checked]:hidden"
      type="off"
    >
      OFF
    </SwapIndicator>
  </Swap>
);

export default SwapDemo;
