import { Check } from "lucide-react";
import {
  Steps,
  StepsCompletedContent,
  StepsContent,
  StepsContext,
  StepsDescription,
  StepsIndicator,
  StepsItem,
  StepsList,
  StepsSeparator,
  StepsTitle,
  StepsTrigger,
} from "@/components/ui/steps";

const TIMELINE_ITEMS = [
  {
    title: "Order Placed",
    description: "Your order has been successfully placed",
  },
  {
    title: "Processing",
    description: "We're preparing your items for shipment",
  },
  { title: "Shipped", description: "Your order is on its way to you" },
  { title: "Delivered", description: "Order delivered to your address" },
] as const;

const StepsVerticalDemo = () => (
  <Steps count={TIMELINE_ITEMS.length} defaultStep={2} orientation="vertical">
    <StepsContext>
      {(api) => (
        <>
          <StepsList>
            {TIMELINE_ITEMS.map((item, index) => {
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

          {TIMELINE_ITEMS.map((item, index) => (
            <StepsContent index={index} key={item.title}>
              <div className="flex flex-col gap-2">
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
                <p className="text-muted-foreground text-sm">
                  This is the content for {item.title}. You can add forms,
                  information, or any other content here.
                </p>
              </div>
            </StepsContent>
          ))}

          <StepsCompletedContent>All steps complete!</StepsCompletedContent>
        </>
      )}
    </StepsContext>
  </Steps>
);

export default StepsVerticalDemo;
