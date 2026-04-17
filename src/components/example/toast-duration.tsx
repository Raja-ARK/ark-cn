import { Button } from "@/components/ui/button";
import { toaster } from "@/components/ui/toast";

const TOAST_DURATIONS = [
  { label: "1s", value: 1000 },
  { label: "3s", value: 3000 },
  { label: "5s", value: 5000 },
  { label: "Infinity", value: Infinity },
];

const ToastDurationDemo = () => (
  <div className="flex flex-wrap gap-2">
    {TOAST_DURATIONS.map((duration) => (
      <Button
        key={duration.label}
        onClick={() =>
          toaster.create({
            title: "Reminder set",
            description:
              duration.value === Infinity
                ? "This notification will stay until dismissed."
                : `This notification will disappear in ${duration.label}.`,
            type: "info",
            duration: duration.value,
          })
        }
        size="sm"
        type="button"
        variant="outline"
      >
        {duration.label}
      </Button>
    ))}
  </div>
);

export default ToastDurationDemo;
