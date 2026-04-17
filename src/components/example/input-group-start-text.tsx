import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupText,
} from "@/components/ui/input-group";

const InputGroupStartText = () => {
  return (
    <InputGroup className="w-full max-w-xs">
      <InputGroupInput
        aria-label="Set your URL"
        className="*:[input]:ps-0!"
        placeholder="ark-cn"
        type="search"
      />
      <InputGroupAddon>
        <InputGroupText>i.cal.com/</InputGroupText>
      </InputGroupAddon>
    </InputGroup>
  );
};

export default InputGroupStartText;
