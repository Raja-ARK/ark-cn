import { QrCode, QrCodeFrame, QrCodePattern } from "@/components/ui/qr-code";

const QrCodeBasic = () => (
  <QrCode defaultValue="https://ark-ui.com">
    <QrCodeFrame>
      <QrCodePattern />
    </QrCodeFrame>
  </QrCode>
);

export default QrCodeBasic;
