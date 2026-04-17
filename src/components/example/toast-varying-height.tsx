import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

const TOAST_DESCRIPTIONS = [
  "Your changes have been saved.",
  "File uploaded successfully. You can view it in your documents folder.",
  "Your meeting has been scheduled for tomorrow at 10:00 AM. We have sent a calendar invite to all participants.",
  "We noticed unusual activity on your account. For your security, please verify your identity by clicking the link sent to your email.",
];

const ToastVaryingHeightDemo = () => {
  const [count, setCount] = useState(0);

  return (
    <Button
      onClick={() => {
        setCount((prevCount) => prevCount + 1);
        toaster.create({
          title: `Notification ${count + 1}`,
          description:
            TOAST_DESCRIPTIONS[
              Math.floor(Math.random() * TOAST_DESCRIPTIONS.length)
            ],
          type: "info",
        });
      }}
      size="sm"
      type="button"
      variant="outline"
    >
      Varying Heights
    </Button>
  );
};

export default ToastVaryingHeightDemo;
