import {
  SignaturePad,
  SignaturePadContext,
  SignaturePadField,
  SignaturePadLabel,
} from "@/components/ui/signature-pad";

const SignaturePadContextDemo = () => (
  <SignaturePad className="w-full max-w-md">
    <SignaturePadContext>
      {(ctx) => (
        <p className="text-muted-foreground text-xs">
          Empty:{" "}
          <span className="font-medium text-foreground">
            {String(ctx.empty)}
          </span>
          {" · "}
          Paths:{" "}
          <span className="font-medium tabular-nums text-foreground">
            {ctx.paths.length}
          </span>
          {ctx.drawing ? (
            <span className="text-foreground"> · drawing</span>
          ) : null}
        </p>
      )}
    </SignaturePadContext>
    <SignaturePadLabel>Sign below</SignaturePadLabel>
    <SignaturePadField />
  </SignaturePad>
);

export default SignaturePadContextDemo;
