import {
  createContext,
  type ReactNode,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTheme } from "../theme-provider";
import type { ThemeOther } from "./color-utils";
import {
  defaultOther,
  defaultTypography,
  getPreset,
  themePresets,
} from "./theme-presets";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;
  muted: string;
  mutedForeground: string;
  destructive: string;
  destructiveForeground: string;
  info: string;
  infoForeground: string;
  success: string;
  successForeground: string;
  warning: string;
  warningForeground: string;
  border: string;
  input: string;
  ring: string;
  chart1: string;
  chart2: string;
  chart3: string;
  chart4: string;
  chart5: string;
  sidebar: string;
  sidebarForeground: string;
  sidebarPrimary: string;
  sidebarPrimaryForeground: string;
  sidebarAccent: string;
  sidebarAccentForeground: string;
  sidebarBorder: string;
  sidebarRing: string;
}

export interface ThemeTypography {
  fontSans: string;
  fontSerif: string;
  fontMono: string;
  letterSpacing: string;
}

export interface ThemeConfig {
  colors: { light: ThemeColors; dark: ThemeColors };
  typography: ThemeTypography;
  other: ThemeOther;
}

export type ColorMode = "light" | "dark";
export type ColorFormat = "oklch" | "hex" | "rgb" | "hsl";
export type LeftTab = "colors" | "typography" | "other";
export type PreviewTab = "components" | "dashboard" | "pricing";

export interface ThemeCustomizeState {
  config: ThemeConfig;
  selectedPreset: string;
  previewMode: ColorMode;
  colorFormat: ColorFormat;
  activeLeftTab: LeftTab;
}

export interface ThemeCustomizeActions {
  selectPreset: (presetName: string) => void;
  updateColor: (mode: ColorMode, key: keyof ThemeColors, value: string) => void;
  updateTypography: (key: keyof ThemeTypography, value: string) => void;
  updateOther: (key: keyof ThemeOther, value: string | number) => void;
  togglePreviewMode: () => void;
  setPreviewMode: (mode: ColorMode) => void;
  resetTheme: () => void;
  setColorFormat: (format: ColorFormat) => void;
  setActiveLeftTab: (tab: LeftTab) => void;
  resetColor: (mode: ColorMode, key: keyof ThemeColors) => void;
}

type ThemeCustomizeContextValue = ThemeCustomizeState & ThemeCustomizeActions;

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

const ThemeCustomizeContext = createContext<ThemeCustomizeContextValue | null>(
  null,
);

export function useThemeCustomize(): ThemeCustomizeContextValue {
  const ctx = useContext(ThemeCustomizeContext);
  if (!ctx) {
    throw new Error(
      "useThemeCustomize must be used within <ThemeCustomizeProvider>",
    );
  }
  return ctx;
}

// ---------------------------------------------------------------------------
// Provider
// ---------------------------------------------------------------------------

function buildInitialState({
  theme,
}: {
  theme: ColorMode;
}): ThemeCustomizeState {
  const preset = themePresets[0];
  return {
    config: {
      colors: { light: { ...preset.light }, dark: { ...preset.dark } },
      typography: { ...defaultTypography, ...preset.typography },
      other: { ...defaultOther, ...preset.other },
    },
    selectedPreset: preset.name,
    previewMode: theme,
    colorFormat: "oklch",
    activeLeftTab: "colors",
  };
}

export function ThemeCustomizeProvider({ children }: { children: ReactNode }) {
  const { theme, systemTheme } = useTheme();
  const [state, setState] = useState<ThemeCustomizeState>(
    buildInitialState({ theme: theme === "system" ? systemTheme : theme }),
  );

  useEffect(() => {
    setState(buildInitialState({ theme: theme === "system" ? systemTheme : theme }));
  }, [theme, systemTheme]);

  const selectPreset = useCallback((presetName: string) => {
    const preset = getPreset(presetName);
    if (!preset) return;
    setState((s) => ({
      ...s,
      selectedPreset: preset.name,
      config: {
        colors: { light: { ...preset.light }, dark: { ...preset.dark } },
        typography: { ...defaultTypography, ...preset.typography },
        other: { ...defaultOther, ...preset.other },
      },
    }));
  }, []);

  const updateColor = useCallback(
    (mode: ColorMode, key: keyof ThemeColors, value: string) => {
      setState((s) => ({
        ...s,
        selectedPreset: "custom",
        config: {
          ...s.config,
          colors: {
            ...s.config.colors,
            [mode]: { ...s.config.colors[mode], [key]: value },
          },
        },
      }));
    },
    [],
  );

  const updateTypography = useCallback(
    (key: keyof ThemeTypography, value: string) => {
      setState((s) => ({
        ...s,
        selectedPreset: "custom",
        config: {
          ...s.config,
          typography: { ...s.config.typography, [key]: value },
        },
      }));
    },
    [],
  );

  const updateOther = useCallback(
    (key: keyof ThemeOther, value: string | number) => {
      setState((s) => ({
        ...s,
        selectedPreset: "custom",
        config: {
          ...s.config,
          other: { ...s.config.other, [key]: value },
        },
      }));
    },
    [],
  );

  const togglePreviewMode = useCallback(() => {
    setState((s) => ({
      ...s,
      previewMode: s.previewMode === "light" ? "dark" : "light",
    }));
  }, []);

  const setPreviewMode = useCallback((mode: ColorMode) => {
    setState((s) => ({ ...s, previewMode: mode }));
  }, []);

  const resetTheme = useCallback(() => {
    setState(
      buildInitialState({ theme: theme === "system" ? systemTheme : theme }),
    );
  }, []);

  const setColorFormat = useCallback((format: ColorFormat) => {
    setState((s) => ({ ...s, colorFormat: format }));
  }, []);

  const setActiveLeftTab = useCallback((tab: LeftTab) => {
    setState((s) => ({ ...s, activeLeftTab: tab }));
  }, []);

  const setActivePreviewTab = useCallback((tab: PreviewTab) => {
    setState((s) => ({ ...s, activePreviewTab: tab }));
  }, []);

  const resetColor = useCallback((mode: ColorMode, key: keyof ThemeColors) => {
    setState((s) => {
      const preset = getPreset(
        s.selectedPreset === "custom" ? "default" : s.selectedPreset,
      );
      if (!preset) return s;
      const presetColors = mode === "light" ? preset.light : preset.dark;
      return {
        ...s,
        config: {
          ...s.config,
          colors: {
            ...s.config.colors,
            [mode]: { ...s.config.colors[mode], [key]: presetColors[key] },
          },
        },
      };
    });
  }, []);

  const value = useMemo<ThemeCustomizeContextValue>(
    () => ({
      ...state,
      selectPreset,
      updateColor,
      updateTypography,
      updateOther,
      togglePreviewMode,
      setPreviewMode,
      resetTheme,
      setColorFormat,
      setActiveLeftTab,
      setActivePreviewTab,
      resetColor,
    }),
    [
      state,
      selectPreset,
      updateColor,
      updateTypography,
      updateOther,
      togglePreviewMode,
      setPreviewMode,
      resetTheme,
      setColorFormat,
      setActiveLeftTab,
      setActivePreviewTab,
      resetColor,
    ],
  );

  return (
    <ThemeCustomizeContext.Provider value={value}>
      {children}
    </ThemeCustomizeContext.Provider>
  );
}
