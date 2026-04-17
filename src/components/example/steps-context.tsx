import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsContext,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/components/ui/steps";

const STEPS_ITEMS = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
] as const;

const StepsContextDemo = () => (
  <Steps count={STEPS_ITEMS.length}>
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {STEPS_ITEMS.map((item, index) => {
              const state = api.getItemState({ index });
              return (
                <StepsItem index={index} key={item.title}>
                  <StepsTrigger>
                    <StepsIndicator>
                      {state.completed ? (
                        <Check className="size-4" />
                      ) : (
                        index + 1
                      )}
                    </StepsIndicator>
                    <StepsTitle>{item.title}</StepsTitle>
                  </StepsTrigger>
                  <StepsSeparator />
                </StepsItem>
              );
            })}
          </StepsList>

          {STEPS_ITEMS.map((item, index) => (
            <StepsContent index={index} key={item.title}>
              <p className="text-muted-foreground">
                {item.title} &ndash; {item.description}
              </p>
            </StepsContent>
          ))}

          <StepsCompletedContent>All done!</StepsCompletedContent>

          <div className="flex items-center justify-between gap-2">
            <span className="text-muted-foreground text-xs">
              Progress:{" "}
              <span className="font-medium text-foreground">
                {api.percent.toFixed(0)}%
              </span>{" "}
              &middot; completed:{" "}
              <span className="font-medium text-foreground">
                {String(api.isCompleted)}
              </span>
            </span>
            <div className="flex gap-2">
              <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Back
                </Button>
              </StepsPrevTrigger>
              <StepsNextTrigger asChild>
                <Button size="sm">Next</Button>
              </StepsNextTrigger>
            </div>
          </div>
        </>
      )}
    </StepsContext>
  </Steps>
);

export default StepsContextDemo;
