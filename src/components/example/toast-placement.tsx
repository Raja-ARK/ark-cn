import { Portal } from "@ark-ui/react/portal";
import { Button } from "@/components/ui/button";
import {
  createToaster,
  ToastCloseTrigger,
  ToastDescription,
  Toaster,
  ToastRoot,
  ToastTitle,
} from "@/components/ui/toast";
import { cn } from "@/lib/utils";

const PLACEMENTS = [
  { label: "Top start", value: "top-start", providerClass: "top-0 left-0" },
  { label: "Top end", value: "top-end", providerClass: "top-0 right-0" },
  {
    label: "Bottom start",
    value: "bottom-start",
    providerClass: "bottom-0 left-0",
  },
  {
    label: "Bottom end",
    value: "bottom-end",
    providerClass: "bottom-0 right-0",
  },
] as const;

type Placement = (typeof PLACEMENTS)[number]["value"];

const placementToasters: Record<
  Placement,
  ReturnType<typeof createToaster>
> = Object.fromEntries(
  PLACEMENTS.map((placement) => [
    placement.value,
    createToaster({
      placement: placement.value,
      overlap: true,
      gap: 16,
      max: 3,
    }),
  ]),
) as Record<Placement, ReturnType<typeof createToaster>>;

const ToastPlacementDemo = () => (
  <>
    <div className="flex flex-wrap gap-2">
      {PLACEMENTS.map((placement) => (
        <Button
          key={placement.value}
          onClick={() =>
            placementToasters[placement.value].create({
              title: `Toast at ${placement.label}`,
              description: `Placement is set to "${placement.value}".`,
              type: "info",
            })
          }
          size="sm"
          type="button"
          variant="outline"
        >
          {placement.label}
        </Button>
      ))}
    </div>

    <Portal>
      {PLACEMENTS.map((placement) => (
        <Toaster
          key={placement.value}
          toaster={placementToasters[placement.value]}
          className={cn(
            "fixed! z-100 flex max-h-screen p-4",
            "w-full md:max-w-105",
            placement.value.startsWith("top") ? "flex-col" : "flex-col-reverse",
            placement.providerClass,
          )}
          data-slot={`toast-provider-${placement.value}`}
        >
          {(toast) => (
            <ToastRoot key={toast.id}>
              <ToastTitle>{toast.title}</ToastTitle>
              {toast.description && (
                <ToastDescription>{toast.description}</ToastDescription>
              )}
              <ToastCloseTrigger />
            </ToastRoot>
          )}
        </Toaster>
      ))}
    </Portal>
  </>
);

export default ToastPlacementDemo;
