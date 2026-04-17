import { Check, Circle, Dot } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsContext,
  StepsDescription,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/components/ui/steps";
import { cn } from "@/lib/utils";

const CENTERED_FORM_STEPS = [
  { title: "Your details", description: "Provide your name and email" },
  { title: "Your password", description: "Choose a password" },
  { title: "Your Favorite Drink", description: "Choose a drink" },
] as const;

const StepsFormCenteredDemo = () => {
  const [step, setStep] = useState(0);

  return (
    <Steps
      count={CENTERED_FORM_STEPS.length}
      onStepChange={(details) => setStep(details.step)}
      step={step}
    >
      <StepsContext>
        {(api) => (
          <>
            <StepsList>
              {CENTERED_FORM_STEPS.map((item, index) => {
                const state = api.getItemState({ index });
                return (
                  <StepsItem
                    index={index}
                    key={item.title}
                    className="flex-col items-center justify-center gap-0"
                  >
                    <StepsSeparator
                      className={cn(
                        "z-0 absolute left-[calc(50%+16px)] -right-[calc(50%-8px)] top-3.75 data-[orientation=horizontal]:mx-0",
                        index === CENTERED_FORM_STEPS.length - 2 &&
                          "-right-[calc(25%-16px)]",
                      )}
                    />
                    <StepsTrigger asChild>
                      <Button
                        variant={
                          state.completed || state.current
                            ? "default"
                            : "outline"
                        }
                        size="icon"
                        className={cn(
                          "z-10 shrink-0 rounded-full text-foreground before:content-[''] before:absolute before:inset-0 before:rounded-full",
                          state.current &&
                            "ring-2 ring-ring ring-offset-2 ring-offset-background",
                          state.completed && "bg-primary text-background",
                        )}
                      >
                        {state.completed ? (
                          <Check className="size-5" />
                        ) : state.current ? (
                          <Circle />
                        ) : (
                          <Dot />
                        )}
                      </Button>
                    </StepsTrigger>
                    <div className="mt-5 flex flex-col items-center text-center">
                      <StepsTitle
                        className={cn(
                          "transition",
                          state.current && "text-primary",
                        )}
                      >
                        {item.title}
                      </StepsTitle>
                      <StepsDescription
                        className={cn(
                          "transition",
                          state.current && "text-primary",
                        )}
                      >
                        {item.description}
                      </StepsDescription>
                    </div>
                  </StepsItem>
                );
              })}
            </StepsList>

            <StepsContent index={0}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">Full Name</label>
                  <input
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
              </div>
            </StepsContent>
            <StepsContent index={1}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">Password</label>
                  <input
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="********"
                    type="password"
                  />
                </div>
              </div>
            </StepsContent>
            <StepsContent index={2}>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">Favorite Drink</label>
                  <select className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <option value="">Select a drink</option>
                    <option value="coffee">Coffee</option>
                    <option value="tea">Tea</option>
                    <option value="soda">Soda</option>
                  </select>
                </div>
              </div>
            </StepsContent>
            <StepsCompletedContent>
              Form submitted successfully!
            </StepsCompletedContent>

            <div className="flex items-center justify-between">
              <StepsPrevTrigger asChild>
                <Button variant="outline" size="sm">
                  Back
                </Button>
              </StepsPrevTrigger>
              <div className="flex items-center gap-3">
                {api.value < api.count - 1 ? (
                  <StepsNextTrigger asChild>
                    <Button size="sm">Next</Button>
                  </StepsNextTrigger>
                ) : !api.isCompleted ? (
                  <Button size="sm" onClick={() => api.goToNextStep()}>
                    Submit
                  </Button>
                ) : null}
              </div>
            </div>
          </>
        )}
      </StepsContext>
    </Steps>
  );
};

export default StepsFormCenteredDemo;
