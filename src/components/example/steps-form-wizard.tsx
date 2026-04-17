import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsContext,
  StepsDescription,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsNextTrigger,
  StepsPrevTrigger,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/components/ui/steps";

const FORM_STEPS = [
  { title: "Account Setup", description: "Create your account" },
  { title: "Profile Info", description: "Complete your profile" },
  { title: "Review", description: "Review your information" },
] as const;

const StepsFormWizardDemo = () => (
  <Steps count={FORM_STEPS.length}>
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {FORM_STEPS.map((item, index) => {
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
                    <div className="flex min-w-0 flex-col">
                      <StepsTitle>{item.title}</StepsTitle>
                      <StepsDescription>{item.description}</StepsDescription>
                    </div>
                  </StepsTrigger>
                  <StepsSeparator />
                </StepsItem>
              );
            })}
          </StepsList>

          <StepsContent index={0}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Username</label>
                <input
                  className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Enter username"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Email</label>
                <input
                  className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Enter email"
                  type="email"
                />
              </div>
            </div>
          </StepsContent>

          <StepsContent index={1}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Bio</label>
                <textarea
                  className="min-h-20 rounded-md border border-input bg-transparent px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Tell us about yourself"
                />
              </div>
            </div>
          </StepsContent>

          <StepsContent index={2}>
            <p className="text-muted-foreground">
              Review your information before submitting.
            </p>
          </StepsContent>

          <StepsCompletedContent>
            Account created successfully!
          </StepsCompletedContent>

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
  </Steps>
);

export default StepsFormWizardDemo;
