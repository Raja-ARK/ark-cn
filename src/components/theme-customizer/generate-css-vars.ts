import type { CSSProperties } from "react";
import { buildShadowLevels, type ThemeOther } from "./color-utils";
import type { ThemeColors, ThemeTypography } from "./theme-customize-context";

/**
 * Generates inline CSS custom properties for the preview wrapper.
 * This is the core scoping mechanism — the preview wrapper applies these vars
 * via `style`, overriding the cascade for everything inside.
 */
export function generateCSSVarObject(
  colors: ThemeColors,
  typography: ThemeTypography,
  other: ThemeOther,
): CSSProperties {
  return {
    // --- Colors ---
    "--background": colors.background,
    "--foreground": colors.foreground,
    "--card": colors.card,
    "--card-foreground": colors.cardForeground,
    "--popover": colors.popover,
    "--popover-foreground": colors.popoverForeground,
    "--primary": colors.primary,
    "--primary-foreground": colors.primaryForeground,
    "--secondary": colors.secondary,
    "--secondary-foreground": colors.secondaryForeground,
    "--accent": colors.accent,
    "--accent-foreground": colors.accentForeground,
    "--muted": colors.muted,
    "--muted-foreground": colors.mutedForeground,
    "--destructive": colors.destructive,
    "--destructive-foreground": colors.destructiveForeground,
    "--info": colors.info,
    "--info-foreground": colors.infoForeground,
    "--success": colors.success,
    "--success-foreground": colors.successForeground,
    "--warning": colors.warning,
    "--warning-foreground": colors.warningForeground,
    "--border": colors.border,
    "--input": colors.input,
    "--ring": colors.ring,
    "--chart-1": colors.chart1,
    "--chart-2": colors.chart2,
    "--chart-3": colors.chart3,
    "--chart-4": colors.chart4,
    "--chart-5": colors.chart5,
    "--sidebar": colors.sidebar,
    "--sidebar-foreground": colors.sidebarForeground,
    "--sidebar-primary": colors.sidebarPrimary,
    "--sidebar-primary-foreground": colors.sidebarPrimaryForeground,
    "--sidebar-accent": colors.sidebarAccent,
    "--sidebar-accent-foreground": colors.sidebarAccentForeground,
    "--sidebar-border": colors.sidebarBorder,
    "--sidebar-ring": colors.sidebarRing,
    // --- Typography ---
    "--font-sans": typography.fontSans,
    "--font-serif": typography.fontSerif,
    "--font-mono": typography.fontMono,
    "--tracking-normal": typography.letterSpacing,
    // --- Radius + spacing ---
    "--radius": other.radius,
    "--spacing": other.spacing,
    // --- Shadow parts ---
    "--shadow-x": `${other.shadowOffsetX}px`,
    "--shadow-y": `${other.shadowOffsetY}px`,
    "--shadow-blur": `${other.shadowBlur}px`,
    "--shadow-spread": `${other.shadowSpread}px`,
    "--shadow-opacity": String(other.shadowOpacity),
    "--shadow-color": other.shadowColor,
    // --- Rebuilt shadow levels ---
    ...buildShadowLevels(other),
  } as CSSProperties;
}
