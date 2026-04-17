import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

const ToastUpdateDemo = () => {
  const idRef = useRef<string>(undefined);

  return (
    <div className="flex flex-wrap gap-2">
      <Button
        onClick={() => {
          idRef.current = toaster.create({
            title: "Sending message\u2026",
            description: "Please wait while we deliver your message.",
            type: "loading",
          });
        }}
        size="sm"
        type="button"
        variant="outline"
      >
        Send message
      </Button>
      <Button
        onClick={() => {
          if (!idRef.current) return;
          toaster.update(idRef.current, {
            title: "Message sent",
            description: "Your message has been delivered successfully.",
            type: "success",
          });
        }}
        size="sm"
        type="button"
        variant="outline"
      >
        Mark as sent
      </Button>
    </div>
  );
};

export default ToastUpdateDemo;
