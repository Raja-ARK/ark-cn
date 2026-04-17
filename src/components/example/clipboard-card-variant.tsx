import {
  ClipboardControl,
  ClipboardIndicator,
  ClipboardLabel,
  ClipboardRoot,
  ClipboardTrigger,
  ClipboardValueText,
} from "@/components/ui/clipboard";

const ClipboardCardVariantDemo = () => (
  <ClipboardRoot value="npm run build">
    <ClipboardLabel>Card style</ClipboardLabel>
    <ClipboardControl controlVariant="card">
      <ClipboardValueText />
      <ClipboardTrigger controlVariant="card" triggerVariant="outline">
        <ClipboardIndicator />
      </ClipboardTrigger>
    </ClipboardControl>
  </ClipboardRoot>
);

export default ClipboardCardVariantDemo;
