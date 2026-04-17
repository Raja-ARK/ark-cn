import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

const ToastActionDemo = () => (
  <Button
    onClick={() =>
      toaster.create({
        title: "Event has been created",
        description: "We have sent you an email with the event details.",
        type: "info",
        action: {
          label: "Undo",
          onClick: () => {
            toaster.create({
              title: "Action undone",
              description: "The action has been reverted.",
              type: "info",
            });
          },
        },
      })
    }
    size="sm"
    type="button"
    variant="outline"
  >
    With Action
  </Button>
);

export default ToastActionDemo;
