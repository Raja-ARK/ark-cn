import { Button } from "@/components/ui/button";
import {
  Radio,
  RadioGroupLabel,
  RadioGroupRootProvider,
  useRadioGroup,
} from "@/components/ui/radio-group";

const RadioGroupRootProviderDemo = () => {
  const radio = useRadioGroup({ defaultValue: "React" });
  const frameworks = ["React", "Solid", "Vue"] as const;

  return (
    <div className="flex max-w-xs flex-col gap-3">
      <RadioGroupRootProvider value={radio}>
        <RadioGroupLabel>Framework</RadioGroupLabel>
        {frameworks.map((framework) => (
          <Radio key={framework} value={framework}>
            {framework}
          </Radio>
        ))}
      </RadioGroupRootProvider>
      <Button
        onClick={() => {
          radio.setValue("Solid");
        }}
        type="button"
        variant="outline"
      >
        Set to Solid
      </Button>
    </div>
  );
};

export default RadioGroupRootProviderDemo;
