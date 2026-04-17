import {
  Marquee,
  MarqueeContent,
  MarqueeContext,
  MarqueeItem,
  MarqueeViewport,
} from "@/components/ui/marquee";

const MARQUEE_FRUITS_SHORT = [
  { name: "Apple", logo: "🍎" },
  { name: "Banana", logo: "🍌" },
  { name: "Cherry", logo: "🍒" },
] as const;

const MarqueeContextExample = () => (
  <div className="w-full max-w-xl">
    <Marquee pauseOnInteraction translations={{ root: "Context API" }}>
      <MarqueeContext>
        {(api) => (
          <>
            <p className="mb-2 text-muted-foreground text-xs">
              Paused: {String(api.paused)} · Orientation: {api.orientation}
            </p>
            <MarqueeViewport>
              <MarqueeContent>
                {MARQUEE_FRUITS_SHORT.map((item, index) => (
                  <MarqueeItem key={`${item.name}-${index}`}>
                    <span className="text-2xl leading-none">{item.logo}</span>
                    <span className="font-medium">{item.name}</span>
                  </MarqueeItem>
                ))}
              </MarqueeContent>
            </MarqueeViewport>
          </>
        )}
      </MarqueeContext>
    </Marquee>
  </div>
);

export default MarqueeContextExample;
