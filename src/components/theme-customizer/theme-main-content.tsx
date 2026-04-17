import { CodeIcon, RotateCcwIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { LandingBentoDemos } from "@/components/landing-bento-demos";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipPopup, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "../ui/separator";
import { Switch, SwitchLabel, SwitchRoot } from "../ui/switch";
import { CodeDialog } from "./code-dialog";
import { generateCSSVarObject } from "./generate-css-vars";
import { useThemeCustomize } from "./theme-customize-context";

const ThemeMainContent = () => {
  const { config, previewMode, togglePreviewMode, resetTheme } =
    useThemeCustomize();

  const [codeDialogOpen, setCodeDialogOpen] = useState(false);

  const activeColors =
    previewMode === "dark" ? config.colors.dark : config.colors.light;

  const vars = useMemo(
    () => generateCSSVarObject(activeColors, config.typography, config.other),
    [activeColors, config.typography, config.other],
  );
  const previewStyle = useMemo(
    () => ({
      ...vars,
      fontFamily: config.typography.fontSans,
      letterSpacing: config.typography.letterSpacing,
    }),
    [vars, config.typography.fontSans, config.typography.letterSpacing],
  );

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-end border-b border-border px-4 py-2 shrink-0 gap-3">
        <SwitchRoot
          checked={previewMode === "dark"}
          onCheckedChange={() => togglePreviewMode()}
          aria-label={`Switch to ${previewMode === "light" ? "dark" : "light"} preview`}
        >
          <SwitchLabel>
            Change mode
          </SwitchLabel>
          <Switch />
        </SwitchRoot>
        <Separator orientation="vertical" className="h-6" />

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon-sm"
              onClick={resetTheme}
              aria-label="Reset theme"
            >
              <RotateCcwIcon className="size-4" />
            </Button>
          </TooltipTrigger>
          <TooltipPopup>Reset to default</TooltipPopup>
        </Tooltip>
        <Button
          variant="default"
          size="sm"
          onClick={() => setCodeDialogOpen(true)}
        >
          <CodeIcon className="size-4" />
          Code
        </Button>
      </div>
      <div
        className="bg-background text-foreground p-6 overflow-y-auto"
        style={previewStyle}
      >
        <LandingBentoDemos />;
      </div>

      <CodeDialog open={codeDialogOpen} onOpenChange={setCodeDialogOpen} />
    </div>
  );
};

export default ThemeMainContent;
