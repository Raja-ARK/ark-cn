import { PlayIcon, RotateCcwIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Timer,
  TimerActionTrigger,
  TimerControl,
  TimerDigits,
} from "@/components/ui/timer";

const TimerEventsDemo = () => {
  const [ticks, setTicks] = useState(0);
  const [completed, setCompleted] = useState(false);

  return (
    <Timer
      onComplete={() => setCompleted(true)}
      onTick={() => setTicks((value) => value + 1)}
      targetMs={60 * 1000}
    >
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
        <TimerActionTrigger action="reset" asChild>
          <Button size="sm" type="button" variant="outline">
            <RotateCcwIcon className="size-4" /> Reset
          </Button>
        </TimerActionTrigger>
      </TimerControl>
      <p className="text-xs text-muted-foreground">
        Ticks: {ticks} {completed ? "· completed" : ""}
      </p>
    </Timer>
  );
};

export default TimerEventsDemo;
