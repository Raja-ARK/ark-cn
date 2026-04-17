import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QrCode, QrCodeFrame, QrCodePattern } from "@/components/ui/qr-code";

const qrEccLevels = ["L", "M", "Q", "H"] as const;
type QrCodeEccLevel = (typeof qrEccLevels)[number];

const QrCodeErrorCorrection = () => {
  const [ecc, setEcc] = useState<QrCodeEccLevel>("L");

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-2">
        {qrEccLevels.map((level) => (
          <Button
            key={level}
            onClick={() => {
              setEcc(level);
            }}
            size="sm"
            type="button"
            variant={ecc === level ? "default" : "outline"}
          >
            {level}
          </Button>
        ))}
      </div>
      <QrCode defaultValue="https://ark-ui.com" encoding={{ ecc }}>
        <QrCodeFrame>
          <QrCodePattern />
        </QrCodeFrame>
      </QrCode>
    </div>
  );
};

export default QrCodeErrorCorrection;
