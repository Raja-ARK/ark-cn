import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

const ButtonGroupWithDisabledButtonDemo = () => (
  <ButtonGroup>
    <Button variant="outline">Enabled</Button>
    <ButtonGroupSeparator />
    <Button disabled variant="outline">
      With Disabled Button
    </Button>
  </ButtonGroup>
);

export default ButtonGroupWithDisabledButtonDemo;
