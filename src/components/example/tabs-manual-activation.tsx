import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsManualActivationDemo = () => (
  <Tabs
    activationMode="manual"
    defaultValue="account"
    variant="default"
    className="w-full max-w-md justify-center gap-3"
  >
    <TabsList className="w-full justify-start">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">
        Manual activation: focus doesn't select until Enter/Space.
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        Try moving focus with arrow keys first.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        Then press Enter to select.
      </div>
    </TabsContent>
  </Tabs>
);

export default TabsManualActivationDemo;
