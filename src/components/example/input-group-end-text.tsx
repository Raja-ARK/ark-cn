import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

const InputGroupEndText = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput
        aria-label="Choose a username"
        placeholder="Choose a username"
        type="text"
      />
      <InputGroupAddon align="inline-end">
        <InputGroupText>@example.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupEndText;
