import { CheckIcon, CopyIcon } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { DocsShikiCode } from "@/components/docs/docs-shiki-code";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogFooter,
  DialogHeader,
  DialogPopup,
  DialogTitle,
} from "@/components/ui/dialog";
import { buildShadowLevels, convertColor } from "./color-utils";
import {
  type ColorFormat,
  type ThemeColors,
  useThemeCustomize,
} from "./theme-customize-context";

interface CodeDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

// Maps camelCase ThemeColors keys to CSS variable names
const COLOR_VAR_MAP: Record<keyof ThemeColors, string> = {
  background: "--background",
  foreground: "--foreground",
  card: "--card",
  cardForeground: "--card-foreground",
  popover: "--popover",
  popoverForeground: "--popover-foreground",
  primary: "--primary",
  primaryForeground: "--primary-foreground",
  secondary: "--secondary",
  secondaryForeground: "--secondary-foreground",
  accent: "--accent",
  accentForeground: "--accent-foreground",
  muted: "--muted",
  mutedForeground: "--muted-foreground",
  destructive: "--destructive",
  destructiveForeground: "--destructive-foreground",
  info: "--info",
  infoForeground: "--info-foreground",
  success: "--success",
  successForeground: "--success-foreground",
  warning: "--warning",
  warningForeground: "--warning-foreground",
  border: "--border",
  input: "--input",
  ring: "--ring",
  chart1: "--chart-1",
  chart2: "--chart-2",
  chart3: "--chart-3",
  chart4: "--chart-4",
  chart5: "--chart-5",
  sidebar: "--sidebar",
  sidebarForeground: "--sidebar-foreground",
  sidebarPrimary: "--sidebar-primary",
  sidebarPrimaryForeground: "--sidebar-primary-foreground",
  sidebarAccent: "--sidebar-accent",
  sidebarAccentForeground: "--sidebar-accent-foreground",
  sidebarBorder: "--sidebar-border",
  sidebarRing: "--sidebar-ring",
};

function generateColorVars(
  colors: ThemeColors,
  format: ColorFormat,
  indent: string,
): string {
  return (Object.keys(COLOR_VAR_MAP) as (keyof ThemeColors)[])
    .map((key) => {
      const cssVar = COLOR_VAR_MAP[key];
      const value = colors[key];
      // Skip css var references (info/success/warning foregrounds in the stylesheet use var())
      const formatted = value.startsWith("var(")
        ? value
        : convertColor(value, format);
      return `${indent}${cssVar}: ${formatted};`;
    })
    .join("\n");
}

function generateCSS(
  lightColors: ThemeColors,
  darkColors: ThemeColors,
  typography: {
    fontSans: string;
    fontSerif: string;
    fontMono: string;
    letterSpacing: string;
  },
  other: {
    radius: string;
    spacing: string;
    shadowColor: string;
    shadowOpacity: number;
    shadowBlur: number;
    shadowSpread: number;
    shadowOffsetX: number;
    shadowOffsetY: number;
  },
  format: ColorFormat,
): string {
  const indent = "  ";
  const lightVars = generateColorVars(lightColors, format, indent);
  const darkVars = generateColorVars(darkColors, format, indent);

  const sharedVars = [
    `${indent}--font-sans: ${typography.fontSans};`,
    `${indent}--font-serif: ${typography.fontSerif};`,
    `${indent}--font-mono: ${typography.fontMono};`,
    `${indent}--radius: ${other.radius};`,
    `${indent}--tracking-normal: ${typography.letterSpacing};`,
    `${indent}--spacing: ${other.spacing};`,
    `${indent}--shadow-x: ${other.shadowOffsetX}px;`,
    `${indent}--shadow-y: ${other.shadowOffsetY}px;`,
    `${indent}--shadow-blur: ${other.shadowBlur}px;`,
    `${indent}--shadow-spread: ${other.shadowSpread}px;`,
    `${indent}--shadow-opacity: ${other.shadowOpacity};`,
    `${indent}--shadow-color: ${other.shadowColor};`,
    ...Object.entries(buildShadowLevels(other)).map(
      ([key, value]) => `${indent}${key}: ${value};`,
    ),
  ].join("\n");

  return `@import "tailwindcss";
@custom-variant dark (&:is(.dark *));

:root {
${lightVars}
${sharedVars}
}

.dark {
${darkVars}
${sharedVars}
}`;
}

export const CodeDialog = ({ open, onOpenChange }: CodeDialogProps) => {
  const { config, colorFormat, setColorFormat } = useThemeCustomize();
  const [copied, setCopied] = useState(false);

  const cssCode = useMemo(
    () =>
      generateCSS(
        config.colors.light,
        config.colors.dark,
        config.typography,
        config.other,
        colorFormat,
      ),
    [config, colorFormat],
  );

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(cssCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [cssCode]);

  return (
    <Dialog open={open} onOpenChange={(d) => onOpenChange(d.open)}>
      <DialogPopup className="max-w-2xl [--dialog-max-h:80dvh]">
        <DialogHeader>
          <DialogTitle>Theme CSS</DialogTitle>
        </DialogHeader>

        {/* Format selector */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">Format:</span>
          {(["oklch", "hex", "rgb", "hsl"] as const).map((fmt) => (
            <Button
              key={fmt}
              variant={colorFormat === fmt ? "default" : "outline"}
              size="xs"
              onClick={() => setColorFormat(fmt)}
            >
              {fmt.toUpperCase()}
            </Button>
          ))}
        </div>

        <div className="max-h-96 overflow-auto rounded-lg border border-border bg-muted p-4">
          <DocsShikiCode
            source={cssCode}
            lang="css"
            className="component-preview-code"
          />
        </div>

        <DialogFooter>
          <Button variant="default" onClick={handleCopy} className="gap-2">
            {copied ? (
              <>
                <CheckIcon className="size-4" />
                Copied!
              </>
            ) : (
              <>
                <CopyIcon className="size-4" />
                Copy to Clipboard
              </>
            )}
          </Button>
        </DialogFooter>
      </DialogPopup>
    </Dialog>
  );
};
