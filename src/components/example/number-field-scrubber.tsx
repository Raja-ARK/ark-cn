import { ArrowLeftRightIcon } from "lucide-react";
import {
  NumberFieldInput,
  NumberFieldRoot,
  NumberFieldScrubber,
} from "@/components/ui/number-field";

const NumberFieldDemo = () => (
  <NumberFieldRoot defaultValue="5" max={10} min={0}>
    <NumberFieldInput
      startAddon={
        <NumberFieldScrubber>
          <ArrowLeftRightIcon className="size-4" />
        </NumberFieldScrubber>
      }
    />
  </NumberFieldRoot>
);

export default NumberFieldDemo;
