import { Button } from "@/components/ui/button";
import {
  MarqueeContent,
  MarqueeItem,
  MarqueeRootProvider,
  MarqueeViewport,
  useMarquee,
} from "@/components/ui/marquee";

const MARQUEE_FRUITS = [
  { name: "Apple", logo: "🍎" },
  { name: "Banana", logo: "🍌" },
  { name: "Cherry", logo: "🍒" },
  { name: "Grape", logo: "🍇" },
  { name: "Watermelon", logo: "🍉" },
  { name: "Strawberry", logo: "🍓" },
] as const;

const MarqueeProgrammaticExample = () => {
  const marquee = useMarquee();

  return (
    <div className="flex w-full max-w-xl flex-col gap-3">
      <MarqueeRootProvider value={marquee}>
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
      </MarqueeRootProvider>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => marquee.pause()}
          size="sm"
          type="button"
          variant="outline"
        >
          Pause
        </Button>
        <Button
          onClick={() => marquee.resume()}
          size="sm"
          type="button"
          variant="outline"
        >
          Resume
        </Button>
        <Button
          onClick={() => marquee.togglePause()}
          size="sm"
          type="button"
          variant="outline"
        >
          Toggle
        </Button>
        <Button
          onClick={() => marquee.restart()}
          size="sm"
          type="button"
          variant="outline"
        >
          Restart
        </Button>
      </div>
    </div>
  );
};

export default MarqueeProgrammaticExample;
