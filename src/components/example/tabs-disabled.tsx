import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsDisabledDemo = () => (
  <Tabs
    defaultValue="account"
    variant="default"
    className="w-full max-w-md justify-center gap-3"
  >
    <TabsList className="w-full justify-start">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger disabled value="password">
        Password (disabled)
      </TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">
        Disabled triggers get{" "}
        <code className="text-foreground">data-disabled</code>.
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        This should never activate.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        Focusable + accessible by default.
      </div>
    </TabsContent>
  </Tabs>
);

export default TabsDisabledDemo;
