import {
  QrCode,
  QrCodeFrame,
  QrCodeOverlay,
  QrCodePattern,
} from "@/components/ui/qr-code";

const QrCodeOverlayExample = () => (
  <QrCode defaultValue="https://ark-ui.com" encoding={{ ecc: "H" }}>
    <QrCodeFrame>
      <QrCodePattern />
    </QrCodeFrame>
    <QrCodeOverlay>
      <img
        alt="Ark UI"
        height={48}
        src="https://ark-ui.com/icon-192.png"
        width={48}
      />
    </QrCodeOverlay>
  </QrCode>
);

export default QrCodeOverlayExample;
