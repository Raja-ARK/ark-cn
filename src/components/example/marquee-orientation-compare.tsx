import {
  Marquee,
  MarqueeContent,
  MarqueeItem,
  MarqueeViewport,
} from "@/components/ui/marquee";

const MARQUEE_FRUITS_SHORT = [
  { name: "Apple", logo: "🍎" },
  { name: "Banana", logo: "🍌" },
  { name: "Cherry", logo: "🍒" },
] as const;

const MarqueeOrientationCompareExample = () => (
  <div className="grid w-full max-w-3xl gap-6 sm:grid-cols-2">
    <div className="flex min-w-0 flex-col gap-2">
      <p className="font-medium text-foreground text-xs">Horizontal</p>
      <Marquee
        className="max-w-full"
        translations={{ root: "Horizontal orientation" }}
      >
        <MarqueeViewport>
          <MarqueeContent>
            {MARQUEE_FRUITS_SHORT.map((item, index) => (
              <MarqueeItem key={`h-${item.name}-${index}`}>
                <span className="text-2xl leading-none">{item.logo}</span>
                <span className="font-medium">{item.name}</span>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </MarqueeViewport>
      </Marquee>
    </div>
    <div className="flex min-w-0 flex-col gap-2">
      <p className="font-medium text-foreground text-xs">
        Vertical (side bottom)
      </p>
      <Marquee
        className="max-w-full"
        side="bottom"
        translations={{ root: "Vertical orientation" }}
      >
        <MarqueeViewport>
          <MarqueeContent>
            {MARQUEE_FRUITS_SHORT.map((item, index) => (
              <MarqueeItem key={`v-${item.name}-${index}`}>
                <span className="text-2xl leading-none">{item.logo}</span>
                <span className="font-medium">{item.name}</span>
              </MarqueeItem>
            ))}
          </MarqueeContent>
        </MarqueeViewport>
      </Marquee>
    </div>
  </div>
);

export default MarqueeOrientationCompareExample;
