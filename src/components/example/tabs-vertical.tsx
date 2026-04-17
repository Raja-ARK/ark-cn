import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsVerticalDemo = () => (
  <Tabs
    defaultValue="account"
    orientation="vertical"
    variant="default"
    className="w-full max-w-md justify-center gap-3"
  >
    <TabsList className="w-min">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account" className="border rounded-lg p-3">
      <div className="text-muted-foreground text-sm">
        Vertical orientation changes arrow-key navigation (Up/Down).
      </div>
    </TabsContent>
    <TabsContent value="password" className="border rounded-lg p-3">
      <div className="text-muted-foreground text-sm">
        Triggers stretch to full width.
      </div>
    </TabsContent>
    <TabsContent value="billing" className="border rounded-lg p-3">
      <div className="text-muted-foreground text-sm">
        Content shifts to the right.
      </div>
    </TabsContent>
  </Tabs>
);

export default TabsVerticalDemo;
