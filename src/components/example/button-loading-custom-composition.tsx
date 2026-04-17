import { Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ButtonLoadingCustomCompositionDemo = () => (
  <Button aria-live="polite" disabled>
    <Loader2Icon className="animate-spin" />
    Loading (Custom Composition)
  </Button>
);

export default ButtonLoadingCustomCompositionDemo;
