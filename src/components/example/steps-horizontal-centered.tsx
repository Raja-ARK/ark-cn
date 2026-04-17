import { BookUser, Check, CreditCard, Truck } from "lucide-react";
import {
  Steps,
  StepsContext,
  StepsDescription,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/components/ui/steps";
import { cn } from "@/lib/utils";

const CENTERED_STEPS: {
  title: string;
  description: string;
  icon?: typeof BookUser;
}[] = [
  { title: "Address", description: "Add your address", icon: BookUser },
  { title: "Shipping", description: "Set your preferred", icon: Truck },
  { title: "Payment", description: "Add any payment", icon: CreditCard },
  { title: "Checkout", description: "Confirm your order" },
];

const StepsHorizontalCenteredDemo = () => (
  <Steps count={CENTERED_STEPS.length}>
    <StepsContext>
      {(api) => (
        <StepsList>
          {CENTERED_STEPS.map((item, index) => {
            const state = api.getItemState({ index });
            const Icon = item.icon;
            return (
              <StepsItem
                index={index}
                key={item.title}
                className="flex-col items-center justify-center gap-0"
              >
                <StepsTrigger className="static z-1">
                  <StepsIndicator>
                    {state.completed ? (
                      <Check className="size-4" />
                    ) : Icon ? (
                      <Icon className="size-4" />
                    ) : (
                      index + 1
                    )}
                  </StepsIndicator>
                </StepsTrigger>
                <StepsSeparator
                  className={cn(
                    "z-0 absolute left-1/2 -right-1/2 top-4 data-[orientation=horizontal]:mx-0",
                    index === CENTERED_STEPS.length - 2 && "-right-1/4",
                  )}
                />
                <div className="mt-2 flex flex-col items-center text-center">
                  <StepsTitle>{item.title}</StepsTitle>
                  <StepsDescription>{item.description}</StepsDescription>
                </div>
              </StepsItem>
            );
          })}
        </StepsList>
      )}
    </StepsContext>
  </Steps>
);

export default StepsHorizontalCenteredDemo;
