import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

const ButtonGroupSmallSizeDemo = () => (
  <ButtonGroup>
    <Button size="sm" variant="outline">
      Small Size
    </Button>
    <ButtonGroupSeparator />
    <Button size="sm" variant="outline">
      Small Size
    </Button>
  </ButtonGroup>
);

export default ButtonGroupSmallSizeDemo;
