import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import { Input } from "@/components/ui/input";

const ButtonGroupWithInputDemo = () => (
  <ButtonGroup className="w-full max-w-md">
    <Input placeholder="With Input" />
    <ButtonGroupSeparator />
    <Button variant="outline">Search</Button>
  </ButtonGroup>
);

export default ButtonGroupWithInputDemo;
