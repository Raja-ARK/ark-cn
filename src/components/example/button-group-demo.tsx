import { ArrowLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

const ButtonGroupDemo = () => (
  <ButtonGroup>
    <ButtonGroup className="hidden sm:flex">
      <Button variant="outline" size="icon" aria-label="Go Back">
        <ArrowLeftIcon />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Button variant="outline">Archive</Button>
      <ButtonGroupSeparator />
      <Button variant="outline">Report</Button>
    </ButtonGroup>
  </ButtonGroup>
);

export default ButtonGroupDemo;
