import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Swap, SwapIndicator } from "@/components/ui/swap";

const SwapLazyMountDemo = () => {
  const [swapped, setSwapped] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <Button
        type="button"
        variant="outline"
        onClick={() => setSwapped((prev) => !prev)}
      >
        Toggle (lazyMount + unmountOnExit)
      </Button>
      <Swap lazyMount swap={swapped} unmountOnExit>
        <SwapIndicator className="swap-indicator-fade" type="on">
          <span className="text-sm">On — mounted when first shown</span>
        </SwapIndicator>
        <SwapIndicator className="swap-indicator-fade" type="off">
          <span className="text-sm">Off — unmounted when hidden</span>
        </SwapIndicator>
      </Swap>
    </div>
  );
};

export default SwapLazyMountDemo;
