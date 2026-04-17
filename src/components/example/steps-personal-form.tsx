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

const PERSONAL_STEPS = [
  { title: "Personal Details", description: "Enter your basic information" },
  { title: "About You", description: "Tell us more about yourself" },
  { title: "Professional Info", description: "Add your professional details" },
] as const;

const StepsPersonalFormDemo = () => (
  <Steps count={PERSONAL_STEPS.length}>
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {PERSONAL_STEPS.map((item, index) => {
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
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">First Name</label>
                  <input
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    defaultValue="John"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="font-medium text-sm">Last Name</label>
                  <input
                    className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    defaultValue="Doe"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Email</label>
                <input
                  className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  defaultValue="john.doe@example.com"
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
                  placeholder="Tell us more about yourself"
                />
              </div>
            </div>
          </StepsContent>

          <StepsContent index={2}>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="font-medium text-sm">Specialization</label>
                <input
                  className="h-9 rounded-md border border-input bg-transparent px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="e.g. Frontend, Backend"
                />
              </div>
            </div>
          </StepsContent>

          <StepsCompletedContent>
            Profile complete &mdash; Welcome aboard!
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

export default StepsPersonalFormDemo;
