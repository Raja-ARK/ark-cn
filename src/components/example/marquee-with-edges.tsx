import {
  Marquee,
  MarqueeContent,
  MarqueeEdge,
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

const MarqueeWithEdgesExample = () => (
  <div className="w-full max-w-xl">
    <Marquee translations={{ root: "Marquee with edge fades" }}>
      <MarqueeEdge side="start" />
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
      <MarqueeEdge side="end" />
    </Marquee>
  </div>
);

export default MarqueeWithEdgesExample;
