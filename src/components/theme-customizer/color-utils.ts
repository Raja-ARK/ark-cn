import {
  converter,
  formatHex,
  formatHsl,
  formatRgb,
  parse,
} from "culori";

const toOklch = converter("oklch");

/**
 * Parse an oklch string like "oklch(0.99 0 0)" into its components.
 */
export function parseOklch(str: string): { l: number; c: number; h: number } {
  const match = str.match(/oklch\(\s*([\d.]+)\s+([\d.]+)\s+([\d.]+)\s*\)/);
  if (match) {
    return {
      l: Number.parseFloat(match[1]),
      c: Number.parseFloat(match[2]),
      h: Number.parseFloat(match[3]),
    };
  }
  // Fallback: try culori parse
  const parsed = parse(str);
  if (parsed) {
    const oklch = toOklch(parsed);
    return { l: oklch.l, c: oklch.c, h: oklch.h ?? 0 };
  }
  return { l: 0.5, c: 0, h: 0 };
}

/**
 * Format oklch components back to a CSS oklch() string.
 */
export function formatOklch(l: number, c: number, h: number): string {
  return `oklch(${round(l, 4)} ${round(c, 4)} ${round(h, 2)})`;
}

/**
 * Convert a color string to a specific format.
 */
export function convertColor(
  value: string,
  format: "oklch" | "rgb" | "hsl" | "hex",
): string {
  // If the value references a CSS var (e.g. var(--color-red-700)), pass it through
  if (value.startsWith("var(")) {
    return value;
  }

  const parsed = parse(value);
  if (!parsed) return value;

  switch (format) {
    case "oklch": {
      const oklch = toOklch(parsed);
      return formatOklch(oklch.l, oklch.c, oklch.h ?? 0);
    }
    case "rgb":
      return formatRgb(parsed);
    case "hsl":
      return formatHsl(parsed);
    case "hex":
      return formatHex(parsed);
    default:
      return value;
  }
}

function round(n: number, decimals: number): number {
  const factor = 10 ** decimals;
  return Math.round(n * factor) / factor;
}

export interface ThemeOther {
  radius: string;
  shadowColor: string;
  shadowOpacity: number;
  shadowBlur: number;
  shadowSpread: number;
  shadowOffsetX: number;
  shadowOffsetY: number;
  spacing: string;
}

/**
 * Build the 8 shadow-level CSS variables from shadow component parts.
 * Mirrors the formulas in src/styles.css.
 */
export function buildShadowLevels(o: ThemeOther): Record<string, string> {
  const {
    shadowColor: color,
    shadowOpacity: op,
    shadowBlur: blur,
    shadowSpread: spread,
    shadowOffsetX: x,
    shadowOffsetY: y,
  } = o;
  const halfOp = round(op / 2, 4);
  const doubleOp = round(Math.min(op * 2.5, 1), 4);

  const base = `${x}px ${y}px ${blur}px ${spread}px`;
  const shifted = (blurMul: number, yMul: number) =>
    `${x}px ${round(y * yMul, 1)}px ${round(blur * blurMul, 1)}px -1px`;

  return {
    "--shadow-2xs": `${base} ${color.replace(")", ` / ${halfOp})`)}`,
    "--shadow-xs": `${base} ${color.replace(")", ` / ${halfOp})`)}`,
    "--shadow-sm": `${base} ${color.replace(")", ` / ${op})`)}${", "}${x}px ${y}px ${blur}px -1px ${color.replace(")", ` / ${op})`)}`,
    "--shadow": `${base} ${color.replace(")", ` / ${op})`)}${", "}${x}px ${y}px ${blur}px -1px ${color.replace(")", ` / ${op})`)}`,
    "--shadow-md": `${base} ${color.replace(")", ` / ${op})`)}${", "}${shifted(2, 2)} ${color.replace(")", ` / ${op})`)}`,
    "--shadow-lg": `${base} ${color.replace(")", ` / ${op})`)}${", "}${shifted(3, 4)} ${color.replace(")", ` / ${op})`)}`,
    "--shadow-xl": `${base} ${color.replace(")", ` / ${op})`)}${", "}${shifted(5, 8)} ${color.replace(")", ` / ${op})`)}`,
    "--shadow-2xl": `${base} ${color.replace(")", ` / ${doubleOp})`)}`,
  };
}
