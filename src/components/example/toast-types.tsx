import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

const ToastTypesDemo = () => (
  <div className="flex flex-wrap gap-2">
    <Button
      onClick={() =>
        toaster.success({
          title: "Success!",
          description: "Your changes have been saved.",
        })
      }
      size="sm"
      type="button"
      variant="outline"
    >
      Success
    </Button>
    <Button
      onClick={() =>
        toaster.error({
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with your request.",
        })
      }
      size="sm"
      type="button"
      variant="outline"
    >
      Error
    </Button>
    <Button
      onClick={() =>
        toaster.warning({
          title: "Warning!",
          description: "Your session is about to expire.",
        })
      }
      size="sm"
      type="button"
      variant="outline"
    >
      Warning
    </Button>
    <Button
      onClick={() =>
        toaster.info({
          title: "Heads up!",
          description: "You can add components to your app using the cli.",
        })
      }
      size="sm"
      type="button"
      variant="outline"
    >
      Info
    </Button>
  </div>
);

export default ToastTypesDemo;
