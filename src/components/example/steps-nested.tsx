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

const StepsNestedDemo = () => (
  <Steps count={2}>
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {["Outer A", "Outer B"].map((title, index) => {
              const state = api.getItemState({ index });
              return (
                <StepsItem index={index} key={title}>
                  <StepsTrigger>
                    <StepsIndicator>
                      {state.completed ? (
                        <Check className="size-4" />
                      ) : (
                        index + 1
                      )}
                    </StepsIndicator>
                    <StepsTitle>{title}</StepsTitle>
                  </StepsTrigger>
                  <StepsSeparator />
                </StepsItem>
              );
            })}
          </StepsList>

          <StepsContent index={0}>
            <div className="flex w-full flex-col gap-3">
              <p className="text-muted-foreground text-sm">
                Nested steps inside step content:
              </p>
              <Steps count={2} className="w-full">
                <StepsContext>
                  {(innerApi) => (
                    <>
                      <StepsList>
                        {["Inner 1", "Inner 2"].map((title, index) => {
                          const state = innerApi.getItemState({ index });
                          return (
                            <StepsItem index={index} key={title}>
                              <StepsTrigger>
                                <StepsIndicator>
                                  {state.completed ? (
                                    <Check className="size-4" />
                                  ) : (
                                    index + 1
                                  )}
                                </StepsIndicator>
                                <StepsTitle>{title}</StepsTitle>
                              </StepsTrigger>
                              <StepsSeparator />
                            </StepsItem>
                          );
                        })}
                      </StepsList>
                      <StepsContent index={0}>
                        <p className="text-muted-foreground">Inner content 1</p>
                      </StepsContent>
                      <StepsContent index={1}>
                        <p className="text-muted-foreground">Inner content 2</p>
                      </StepsContent>
                      <StepsCompletedContent>
                        Inner complete!
                      </StepsCompletedContent>
                      <div className="flex justify-end gap-2">
                        <StepsPrevTrigger asChild>
                          <Button variant="outline" size="sm">
                            Back
                          </Button>
                        </StepsPrevTrigger>
                        <StepsNextTrigger asChild>
                          <Button size="sm">Next</Button>
                        </StepsNextTrigger>
                      </div>
                    </>
                  )}
                </StepsContext>
              </Steps>
            </div>
          </StepsContent>

          <StepsContent index={1}>
            <p className="text-muted-foreground">Outer step B content</p>
          </StepsContent>

          <StepsCompletedContent>
            All outer steps complete!
          </StepsCompletedContent>

          <div className="flex justify-end gap-2">
            <StepsPrevTrigger asChild>
              <Button variant="outline" size="sm">
                Back
              </Button>
            </StepsPrevTrigger>
            <StepsNextTrigger asChild>
              <Button size="sm">Next</Button>
            </StepsNextTrigger>
          </div>
        </>
      )}
    </StepsContext>
  </Steps>
);

export default StepsNestedDemo;
