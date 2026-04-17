import { Button } from "@/components/ui/button";
import {
  QrCodeFrame,
  QrCodePattern,
  QrCodeRootProvider,
  useQrCode,
} from "@/components/ui/qr-code";

const QrCodeRootProviderExample = () => {
  const store = useQrCode({ defaultValue: "https://ark-ui.com" });

  return (
    <div className="flex max-w-md flex-col gap-3">
      <QrCodeRootProvider value={store}>
        <QrCodeFrame>
          <QrCodePattern />
        </QrCodeFrame>
      </QrCodeRootProvider>
      <output className="text-muted-foreground text-xs">
        <span className="text-foreground">Current value:</span>{" "}
        <span className="font-mono text-foreground">{store.value}</span>
      </output>
      <div className="flex flex-wrap gap-2">
        <Button
          onClick={() => {
            store.setValue("https://react.dev");
          }}
          size="sm"
          type="button"
          variant="outline"
        >
          react.dev
        </Button>
        <Button
          onClick={() => {
            store.setValue("https://ark-ui.com");
          }}
          size="sm"
          type="button"
          variant="secondary"
        >
          ark-ui.com
        </Button>
      </div>
    </div>
  );
};

export default QrCodeRootProviderExample;
