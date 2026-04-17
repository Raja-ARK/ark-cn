import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

const ToastLoadingDemo = () => (
  <Button
    onClick={() =>
      toaster.create({
        title: "Loading\u2026",
        description: "Please wait while we process your request.",
        type: "loading",
      })
    }
    size="sm"
    type="button"
    variant="outline"
  >
    Loading Toast
  </Button>
);

export default ToastLoadingDemo;
