import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  StepsCompletedContent,
  StepsContent,
  StepsContext,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsRootProvider,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
  useSteps,
} from "@/components/ui/steps";

const STEPS_ITEMS = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
] as const;

const StepsRootProviderDemo = () => {
  const store = useSteps({ count: STEPS_ITEMS.length });

  return (
    <div className="flex w-full flex-col gap-3">
      <div className="flex flex-wrap items-center gap-2">
        <Button
          onClick={() => store.goToPrevStep()}
          size="sm"
          variant="outline"
        >
          Prev
        </Button>
        <Button
          onClick={() => store.goToNextStep()}
          size="sm"
          variant="outline"
        >
          Next
        </Button>
        <Button onClick={() => store.resetStep()} size="sm" variant="outline">
          Reset
        </Button>
        <span className="text-muted-foreground text-xs">
          step:{" "}
          <span className="font-medium text-foreground">{store.value + 1}</span>
        </span>
      </div>
      <StepsRootProvider value={store}>
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

              <div className="flex items-center justify-between">
                <StepsPrevTrigger asChild>
                  <Button variant="outline" size="sm">
                    Previous
                  </Button>
                </StepsPrevTrigger>
                <span className="text-muted-foreground text-sm">
                  Step {api.value + 1} of {api.count}
                </span>
                <StepsNextTrigger asChild>
                  <Button size="sm">Next</Button>
                </StepsNextTrigger>
              </div>
            </>
          )}
        </StepsContext>
      </StepsRootProvider>
    </div>
  );
};

export default StepsRootProviderDemo;
