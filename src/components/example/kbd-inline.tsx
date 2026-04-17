import { Kbd, KbdGroup } from "@/components/ui/kbd";

const KbdInline = () => {
  return (
    <p className="text-sm">
      Press{" "}
      <KbdGroup>
        <Kbd>⌘</Kbd>
        <Kbd>K</Kbd>
      </KbdGroup>{" "}
      to open command search.
    </p>
  );
};

export default KbdInline;
