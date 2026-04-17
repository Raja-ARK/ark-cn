import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";

const ButtonGroupWithEndTextDemo = () => (
  <ButtonGroup>
    <Button variant="outline">Save</Button>
    <ButtonGroupSeparator />
    <ButtonGroupText>With End Text</ButtonGroupText>
  </ButtonGroup>
);

export default ButtonGroupWithEndTextDemo;
