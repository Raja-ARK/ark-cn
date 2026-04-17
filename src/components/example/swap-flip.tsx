import { PauseIcon, PlayIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Swap, SwapIndicator } from "@/components/ui/swap";

const SwapFlipDemo = () => {
  const [swapped, setSwapped] = useState(false);
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => setSwapped((prev) => !prev)}
      aria-label={swapped ? "Show pause" : "Show play"}
    >
      <Swap swap={swapped} style={{ perspective: "200px" }}>
        <SwapIndicator className="swap-indicator-flip" type="on">
          <PlayIcon />
        </SwapIndicator>
        <SwapIndicator className="swap-indicator-flip" type="off">
          <PauseIcon />
        </SwapIndicator>
      </Swap>
    </Button>
  );
};

export default SwapFlipDemo;
