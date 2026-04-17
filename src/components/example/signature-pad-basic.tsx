import {
  SignaturePad,
  SignaturePadField,
  SignaturePadLabel,
} from "@/components/ui/signature-pad";

const SignaturePadBasicDemo = () => (
  <SignaturePad className="w-full max-w-md">
    <SignaturePadLabel>Sign below</SignaturePadLabel>
    <SignaturePadField />
  </SignaturePad>
);

export default SignaturePadBasicDemo;
