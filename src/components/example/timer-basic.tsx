import { PauseIcon, PlayIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Timer,
  TimerActionTrigger,
  TimerControl,
  TimerDigits,
} from "@/components/ui/timer";

const TimerBasicDemo = () => (
  <Timer startMs={40 * 60 * 1000} targetMs={60 * 60 * 1000}>
    <TimerDigits
      parts={[
        { type: "days", label: "days" },
        { type: "hours", label: "hours" },
        { type: "minutes", label: "minutes" },
        { type: "seconds", label: "seconds" },
      ]}
    />
    <TimerControl>
      <TimerActionTrigger action="start" asChild>
        <Button size="sm" type="button" variant="outline">
          <PlayIcon className="size-4" /> Play
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="resume" asChild>
        <Button size="sm" type="button" variant="outline">
          <PlayIcon className="size-4" /> Resume
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="pause" asChild>
        <Button size="sm" type="button" variant="outline">
          <PauseIcon className="size-4" /> Pause
        </Button>
      </TimerActionTrigger>
    </TimerControl>
  </Timer>
);

export default TimerBasicDemo;
