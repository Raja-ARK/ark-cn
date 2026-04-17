import { PauseIcon, PlayIcon, RotateCcwIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Timer,
  TimerActionTrigger,
  TimerControl,
  TimerDigits,
} from "@/components/ui/timer";

const TimerPomodoroDemo = () => {
  const [isWorking, setIsWorking] = useState(true);
  const [cycles, setCycles] = useState(0);

  const onComplete = () => {
    setIsWorking((value) => !value);
    if (!isWorking) {
      setCycles((value) => value + 1);
    }
  };

  return (
    <Timer
      countdown
      key={isWorking ? "work" : "break"}
      onComplete={onComplete}
      startMs={isWorking ? 25 * 60 * 1000 : 5 * 60 * 1000}
    >
      <p className="text-sm font-medium text-foreground">
        {isWorking ? "Work session" : "Break session"}
      </p>
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
      <p className="text-xs text-muted-foreground">
        Completed cycles: {cycles}
      </p>
    </Timer>
  );
};

export default TimerPomodoroDemo;
