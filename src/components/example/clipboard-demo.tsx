import { CheckIcon, CopyIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ClipboardControl,
  ClipboardIndicator,
  ClipboardInput,
  ClipboardRoot,
  ClipboardTrigger,
  ClipboardValueText,
} from "@/components/ui/clipboard";

const ClipboardDemo = () => (
  <ClipboardRoot value="https://ark-ui.com" className="w-full max-w-md">
    <ClipboardControl>
      <ClipboardInput />
      <ClipboardTrigger asChild>
        <Button size="icon" variant="ghost">
          <ClipboardIndicator copied={<CheckIcon className="size-4" />}>
            <CopyIcon className="size-4" />
          </ClipboardIndicator>
        </Button>
      </ClipboardTrigger>
    </ClipboardControl>
    <ClipboardValueText className="text-muted-foreground text-xs" />
  </ClipboardRoot>
);

export default ClipboardDemo;
