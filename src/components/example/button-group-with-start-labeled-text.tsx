import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";

const ButtonGroupWithStartLabeledTextDemo = () => (
  <ButtonGroup>
    <ButtonGroupText>View</ButtonGroupText>
    <ButtonGroupSeparator />
    <Button variant="outline">Month</Button>
    <ButtonGroupSeparator />
    <Button variant="outline">Week</Button>
  </ButtonGroup>
);

export default ButtonGroupWithStartLabeledTextDemo;
