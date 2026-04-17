import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Timer,
  TimerActionTrigger,
  TimerControl,
  TimerDigits,
} from "@/components/ui/timer";

const TimerCountdownDemo = () => (
  <Timer countdown startMs={5 * 60 * 1000}>
    <TimerDigits
      parts={[
        { type: "minutes", label: "minutes" },
        { type: "seconds", label: "seconds" },
      ]}
    />
    <TimerControl>
      <TimerActionTrigger action="start" asChild>
        <Button size="sm" type="button" variant="outline">
          <PlayIcon className="size-4" /> Start
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="pause" asChild>
        <Button size="sm" type="button" variant="outline">
          <PauseIcon className="size-4" /> Pause
        </Button>
      </TimerActionTrigger>
      <TimerActionTrigger action="reset" asChild>
        <Button size="sm" type="button" variant="outline">
          <RotateCcwIcon className="size-4" /> Reset
        </Button>
      </TimerActionTrigger>
    </TimerControl>
  </Timer>
);

export default TimerCountdownDemo;
