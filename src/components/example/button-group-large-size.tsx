import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

const ButtonGroupLargeSizeDemo = () => (
  <ButtonGroup>
    <Button size="lg" variant="outline">
      Large Size
    </Button>
    <ButtonGroupSeparator />
    <Button size="lg" variant="outline">
      Large Size
    </Button>
  </ButtonGroup>
);

export default ButtonGroupLargeSizeDemo;
