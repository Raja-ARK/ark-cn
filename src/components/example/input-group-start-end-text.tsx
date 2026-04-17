import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

const InputGroupStartEndText = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput
        aria-label="Enter your domain"
        className="*:[input]:px-0!"
        placeholder="ark-cn"
        type="text"
      />
      <InputGroupAddon>
        <InputGroupText>https://</InputGroupText>
      </InputGroupAddon>
      <InputGroupAddon align="inline-end">
        <InputGroupText>.com</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupStartEndText;
