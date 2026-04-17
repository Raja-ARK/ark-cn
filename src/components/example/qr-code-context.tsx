import {
  QrCode,
  QrCodeContext,
  QrCodeFrame,
  QrCodePattern,
} from "@/components/ui/qr-code";

const QrCodeContextExample = () => (
  <QrCode defaultValue="https://ark-ui.com">
    <QrCodeContext>
      {(context) => (
        <p className="text-muted-foreground text-xs">
          Value length:{" "}
          <span className="font-medium tabular-nums text-foreground">
            {context.value.length}
          </span>
        </p>
      )}
    </QrCodeContext>
    <QrCodeFrame>
      <QrCodePattern />
    </QrCodeFrame>
  </QrCode>
);

export default QrCodeContextExample;
