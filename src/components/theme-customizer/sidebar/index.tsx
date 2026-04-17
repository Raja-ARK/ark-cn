import {
  SidebarContent,
  Sidebar as SidebarPrimitive,
} from "@/components/ui/sidebar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { type LeftTab, useThemeCustomize } from "../theme-customize-context";
import { ColorsTab } from "./colors-tab";
import { OtherTab } from "./other-tab";
import { TypographyTab } from "./typography-tab";

export const Sidebar = () => {
  const { activeLeftTab, setActiveLeftTab } = useThemeCustomize();

  return (
    <SidebarPrimitive className="sticky top-(--header-height) h-[calc(100svh-var(--header-height))]">
      <SidebarContent className="py-3">
        <Tabs
          value={activeLeftTab}
          onValueChange={(d) => setActiveLeftTab(d.value as LeftTab)}
          variant="underline"
        >
          <TabsList className="w-full">
            <TabsTrigger value="colors" className="flex-1">
              Colors
            </TabsTrigger>
            <TabsTrigger value="typography" className="flex-1">
              Typography
            </TabsTrigger>
            <TabsTrigger value="other" className="flex-1">
              Other
            </TabsTrigger>
          </TabsList>
          <TabsContent value="colors" className="px-4">
            <ColorsTab />
          </TabsContent>
          <TabsContent value="typography" className="px-4">
            <TypographyTab />
          </TabsContent>
          <TabsContent value="other" className="px-4">
            <OtherTab />
          </TabsContent>
        </Tabs>
      </SidebarContent>
    </SidebarPrimitive>
  );
};
