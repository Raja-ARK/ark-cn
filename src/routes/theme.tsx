import { createFileRoute } from "@tanstack/react-router";
import { ThemeCustomize } from "@/components/theme-customizer";

export const Route = createFileRoute("/theme")({
  component: ThemeCustomize,
  head: () => ({ meta: [{ title: "Theme Customizer — ARK CN" }] }),
});
