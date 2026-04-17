import { CheckIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Swap, SwapIndicator } from "@/components/ui/swap";

const SwapFadeDemo = () => {
  const [swapped, setSwapped] = useState(false);
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => setSwapped((prev) => !prev)}
      aria-label={swapped ? "Show error icon" : "Show success icon"}
    >
      <Swap swap={swapped}>
        <SwapIndicator className="swap-indicator-fade" type="on">
          <CheckIcon />
        </SwapIndicator>
        <SwapIndicator className="swap-indicator-fade" type="off">
          <XIcon />
        </SwapIndicator>
      </Swap>
    </Button>
  );
};

export default SwapFadeDemo;
