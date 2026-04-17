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

const MarqueeAutoFillExample = () => (
  <div className="w-full max-w-xl">
    <Marquee autoFill spacing="2rem" translations={{ root: "Auto-filled row" }}>
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
    </Marquee>
  </div>
);

export default MarqueeAutoFillExample;
