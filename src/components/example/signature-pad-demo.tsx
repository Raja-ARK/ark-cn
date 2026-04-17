import {
  SignaturePad,
  SignaturePadField,
  SignaturePadLabel,
} from "@/components/ui/signature-pad";

const SignaturePadDemo = () => (
  <SignaturePad className="w-full max-w-md">
    <SignaturePadLabel>Signature</SignaturePadLabel>
    <SignaturePadField className="h-40" />
  </SignaturePad>
);

export default SignaturePadDemo;
