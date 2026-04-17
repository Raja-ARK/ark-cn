import {
  SignaturePadField,
  SignaturePadLabel,
  SignaturePadRootProvider,
  useSignaturePad,
} from "@/components/ui/signature-pad";

const SignaturePadRootProviderDemo = () => {
  const pad = useSignaturePad();
  return (
    <div className="flex w-full max-w-md flex-col gap-2">
      <output className="text-muted-foreground text-xs">
        Paths:{" "}
        <span className="font-medium tabular-nums text-foreground">
          {pad.paths.length}
        </span>
      </output>
      <SignaturePadRootProvider value={pad}>
        <SignaturePadLabel>Sign below</SignaturePadLabel>
        <SignaturePadField />
      </SignaturePadRootProvider>
    </div>
  );
};

export default SignaturePadRootProviderDemo;
