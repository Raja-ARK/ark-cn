import { BellIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

const ToastStackedDemo = () => (
  <Button
    onClick={() => {
      ["Deployment queued", "Build started", "Build completed"].forEach(
        (title) => {
          toaster.create({
            title,
            description: "Monday, January 3rd at 6:00pm",
          });
        },
      );
    }}
    size="sm"
    type="button"
    variant="outline"
  >
    <BellIcon className="size-4" />
    Push 3 toasts
  </Button>
);

export default ToastStackedDemo;
