import { useState } from "react";
import { Button } from "@/components/ui/button";
import { QrCode, QrCodeFrame, QrCodePattern } from "@/components/ui/qr-code";

const QrCodeControlled = () => {
  const [value, setValue] = useState("https://ark-ui.com");

  return (
    <div className="flex flex-col gap-3">
      <QrCode
        onValueChange={(details) => {
          setValue(details.value);
        }}
        value={value}
      >
        <QrCodeFrame>
          <QrCodePattern />
        </QrCodeFrame>
      </QrCode>
      <Button
        onClick={() => {
          setValue("https://react.dev");
        }}
        type="button"
        variant="outline"
      >
        Encode react.dev
      </Button>
    </div>
  );
};

export default QrCodeControlled;
