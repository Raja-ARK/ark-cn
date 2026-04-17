import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Swap, SwapIndicator } from "@/components/ui/swap";

const SwapScaleDemo = () => {
  const [swapped, setSwapped] = useState(false);
  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      onClick={() => setSwapped((prev) => !prev)}
      aria-label={swapped ? "Mute" : "Unmute"}
    >
      <Swap swap={swapped}>
        <SwapIndicator className="swap-indicator-scale" type="on">
          <Volume2Icon />
        </SwapIndicator>
        <SwapIndicator className="swap-indicator-scale" type="off">
          <VolumeXIcon />
        </SwapIndicator>
      </Swap>
    </Button>
  );
};

export default SwapScaleDemo;
