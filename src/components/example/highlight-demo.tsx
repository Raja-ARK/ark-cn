import { Highlight } from "@/components/ui/highlight";

const TEXT =
  "Ark CN keeps locale-aware formatting and RTL-aware layouts close to the component source, so docs previews stay honest.";

const HighlightDemo = () => (
  <div className="max-w-xl rounded-xl border border-border bg-card p-5 text-sm leading-7">
    <Highlight text={TEXT} query={["ark", "locale", "rtl"]} />
  </div>
);

export default HighlightDemo;
