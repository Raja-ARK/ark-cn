import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsLazyMountDemo = () => (
  <Tabs
    defaultValue="account"
    lazyMount
    unmountOnExit
    variant="underline"
    className="w-full max-w-md justify-center gap-3"
  >
    <TabsList className="w-full justify-start">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">Lazy mounted content.</div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        Unmounted when you switch away.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        Mounted again when revisited.
      </div>
    </TabsContent>
  </Tabs>
);

export default TabsLazyMountDemo;
