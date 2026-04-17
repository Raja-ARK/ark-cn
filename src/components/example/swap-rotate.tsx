import { MoonIcon, SunIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Swap, SwapIndicator } from "@/components/ui/swap";

const SwapRotateDemo = () => {
  const [swapped, setSwapped] = useState(false);
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => setSwapped((prev) => !prev)}
      aria-label={swapped ? "Show moon" : "Show sun"}
    >
      <Swap swap={swapped}>
        <SwapIndicator className="swap-indicator-rotate" type="on">
          <SunIcon />
        </SwapIndicator>
        <SwapIndicator className="swap-indicator-rotate" type="off">
          <MoonIcon />
        </SwapIndicator>
      </Swap>
    </Button>
  );
};

export default SwapRotateDemo;
