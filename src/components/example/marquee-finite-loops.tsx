import { useState } from "react";

import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
  MarqueeViewport,
} from "@/components/ui/marquee";

const MARQUEE_FRUITS = [
  { name: "Apple", logo: "🍎" },
  { name: "Banana", logo: "🍌" },
  { name: "Cherry", logo: "🍒" },
  { name: "Grape", logo: "🍇" },
  { name: "Watermelon", logo: "🍉" },
  { name: "Strawberry", logo: "🍓" },
] as const;

const MarqueeFiniteLoopsExample = () => {
  const [loopsFinished, setLoopsFinished] = useState(0);
  const [runsCompleted, setRunsCompleted] = useState(0);

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <Marquee
        loopCount={3}
        onComplete={() => setRunsCompleted((count) => count + 1)}
        onLoopComplete={() => setLoopsFinished((count) => count + 1)}
        translations={{ root: "Finite loop marquee" }}
      >
        <MarqueeViewport>
          <MarqueeContent>
            {MARQUEE_FRUITS.map((item, index) => (
              <MarqueeItem key={`${item.name}-${index}`}>
                <span className="text-2xl leading-none">{item.logo}</span>
                <span className="font-medium">{item.name}</span>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </MarqueeViewport>
      </Marquee>
      <p className="text-muted-foreground text-xs">
        Loops finished: {loopsFinished} · Runs completed: {runsCompleted}
      </p>
    </div>
  );
};

export default MarqueeFiniteLoopsExample;
