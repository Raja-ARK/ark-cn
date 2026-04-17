import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Theme = "dark" | "light" | "system";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
  storageKey?: string;
};

type ThemeProviderState = {
  systemTheme: Exclude<Theme, "system">;
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const THEME_STORAGE_KEY = "vite-ui-theme";

const ThemeProviderContext = createContext<ThemeProviderState | undefined>(
  undefined,
);

const isTheme = (value: string | null): value is Theme => {
  return value === "dark" || value === "light" || value === "system";
};

const applyTheme = (theme: Theme, systemTheme: Exclude<Theme, "system">) => {
  const root = window.document.documentElement;
  const resolvedTheme = theme === "system" ? systemTheme : theme;

  root.classList.remove("light", "dark");
  root.classList.add(resolvedTheme);
  root.style.colorScheme = resolvedTheme;
};

export const ThemeProvider = ({
  children,
  defaultTheme = "system",
  storageKey = THEME_STORAGE_KEY,
}: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);
  const [systemTheme, setSystemTheme] = useState<Exclude<Theme, "system">>(
    "light",
  );

  useEffect(() => {
    const storedTheme = window.localStorage.getItem(storageKey);

    if (!isTheme(storedTheme)) {
      return;
    }

    setThemeState((currentTheme) =>
      currentTheme === storedTheme ? currentTheme : storedTheme,
    );
  }, [storageKey]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateSystemTheme = () =>
      setSystemTheme(mediaQuery.matches ? "dark" : "light");

    updateSystemTheme();
    mediaQuery.addEventListener("change", updateSystemTheme);
    return () => mediaQuery.removeEventListener("change", updateSystemTheme);
  }, []);

  useEffect(() => {
    applyTheme(theme, systemTheme);
  }, [theme, systemTheme]);

  const setTheme = useCallback(
    (nextTheme: Theme) => {
      window.localStorage.setItem(storageKey, nextTheme);
      setThemeState(nextTheme);
    },
    [storageKey],
  );

  const value = useMemo(
    () => ({
      systemTheme,
      theme,
      setTheme,
    }),
    [systemTheme, theme, setTheme],
  );

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
