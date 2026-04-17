import {
  QrCode,
  QrCodeDownloadTrigger,
  QrCodeFrame,
  QrCodePattern,
} from "@/components/ui/qr-code";

const QrCodeDownload = () => (
  <QrCode defaultValue="https://ark-ui.com">
    <QrCodeFrame>
      <QrCodePattern />
    </QrCodeFrame>
    <QrCodeDownloadTrigger fileName="qr-code.png" mimeType="image/png">
      Download PNG
    </QrCodeDownloadTrigger>
  </QrCode>
);

export default QrCodeDownload;
