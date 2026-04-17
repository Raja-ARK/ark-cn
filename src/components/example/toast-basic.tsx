import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

const ToastBasicDemo = () => (
  <Button
    onClick={() =>
      toaster.create({
        title: "Event has been created",
        description: "Monday, January 3rd at 6:00pm",
        type: "info",
      })
    }
    size="sm"
    type="button"
    variant="outline"
  >
    Default Toast
  </Button>
);

export default ToastBasicDemo;
