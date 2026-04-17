import { QrCode, QrCodeFrame, QrCodePattern } from "@/components/ui/qr-code";

const QrCodeFill = () => (
  <div className="flex flex-wrap gap-6">
    {["#5417D7", "#EC5D5E"].map((fill) => (
      <QrCode defaultValue="https://ark-ui.com" key={fill}>
        <QrCodeFrame className="text-foreground" style={{ fill }}>
          <QrCodePattern />
        </QrCodeFrame>
      </QrCode>
    ))}
  </div>
);

export default QrCodeFill;
