import { PlusIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Input } from "../ui/input";

const ButtonGroupNestedGroupsDemo = () => (
  <ButtonGroup>
    <ButtonGroup>
      <Button variant="outline" size="icon">
        <PlusIcon />
      </Button>
    </ButtonGroup>
    <ButtonGroup>
      <Input placeholder="Send a message..." />
    </ButtonGroup>
  </ButtonGroup>
);

export default ButtonGroupNestedGroupsDemo;
