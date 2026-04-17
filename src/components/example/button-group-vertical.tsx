import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

const ButtonGroupVertical = () => (
  <ButtonGroup orientation="vertical">
    <Button variant="outline">Vertical</Button>
    <ButtonGroupSeparator orientation="horizontal" />
    <Button variant="outline">Vertical</Button>
    <ButtonGroupSeparator orientation="horizontal" />
    <Button variant="outline">Vertical</Button>
  </ButtonGroup>
);

export default ButtonGroupVertical;
