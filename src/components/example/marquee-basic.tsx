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

const MarqueeBasicExample = () => (
  <div className="w-full max-w-xl">
    <Marquee translations={{ root: "Scrolling fruit labels" }}>
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
  </div>
);

export default MarqueeBasicExample;
