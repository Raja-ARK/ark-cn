import { Check, Circle, Dot } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Steps,
  StepsContext,
  StepsDescription,
  StepsItem,
  StepsList,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/components/ui/steps";
import { cn } from "@/lib/utils";

const DETAILS_STEPS = [
  {
    title: "Your details",
    description:
      "Provide your name and email address. We will use this information to create your account",
  },
  {
    title: "Company details",
    description:
      "A few details about your company will help us personalize your experience",
  },
  {
    title: "Invite your team",
    description:
      "Start collaborating with your team by inviting them to join your account. You can skip this step and invite them later",
  },
] as const;

const StepsVerticalButtonsDemo = () => (
  <Steps
    count={DETAILS_STEPS.length}
    orientation="vertical"
    className="mx-auto flex-col! gap-0! max-w-md"
  >
    <StepsContext>
      {(api) => (
        <StepsList className="w-full">
          {DETAILS_STEPS.map((item, index) => {
            const state = api.getItemState({ index });
            return (
              <StepsItem
                index={index}
                key={item.title}
                className="flex w-full items-start gap-6"
              >
                <StepsSeparator className="data-[orientation=vertical]:left-3.75 data-[orientation=vertical]:top-8 data-[orientation=vertical]:bottom-auto data-[orientation=vertical]:h-[calc(100%-32px)]" />
                <StepsTrigger asChild>
                  <Button
                    variant={
                      state.completed || state.current ? "default" : "outline"
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
                <div className="flex flex-col gap-1">
                  <StepsTitle
                    className={cn(
                      "transition lg:text-base",
                      state.current && "text-primary",
                    )}
                  >
                    {item.title}
                  </StepsTitle>
                  <StepsDescription
                    className={cn(
                      "whitespace-normal text-sm transition",
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
      )}
    </StepsContext>
  </Steps>
);

export default StepsVerticalButtonsDemo;
