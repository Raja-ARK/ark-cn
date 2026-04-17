import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsUnderlineVerticalDemo = () => (
  <Tabs
    defaultValue="account"
    orientation="vertical"
    variant="underline"
    className="w-full max-w-md justify-center"
  >
    <TabsList className="w-min justify-start">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account" className="border rounded-lg p-3">
      <div className="text-muted-foreground text-sm">
        Underline variant uses a sliding indicator bar.
      </div>
    </TabsContent>
    <TabsContent value="password" className="border rounded-lg p-3">
      <div className="text-muted-foreground text-sm">
        Keyboard: Arrow keys move focus, Enter selects in manual mode.
      </div>
    </TabsContent>
    <TabsContent value="billing" className="border rounded-lg p-3">
      <div className="text-muted-foreground text-sm">
        Supports vertical orientation too.
      </div>
    </TabsContent>
  </Tabs>
);

export default TabsUnderlineVerticalDemo;
