import {
  TabsContent,
  TabsList,
  TabsRootProvider,
  TabsTrigger,
  useTabs,
} from "@/components/ui/tabs";

const TabsRootProviderDemo = () => {
  const api = useTabs({ defaultValue: "account" });

  return (
    <div className="flex w-full flex-col gap-3 max-w-md justify-center">
      <div className="text-muted-foreground text-xs">
        selected:{" "}
        <span className="font-medium text-foreground">{api.value}</span>
      </div>
      <TabsRootProvider value={api} variant="default">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="text-muted-foreground text-sm">
            RootProvider: control from outside via{" "}
            <code className="text-foreground">useTabs</code>.
          </div>
        </TabsContent>
        <TabsContent value="password">
          <div className="text-muted-foreground text-sm">
            Expose state anywhere you need.
          </div>
        </TabsContent>
        <TabsContent value="billing">
          <div className="text-muted-foreground text-sm">
            No prop drilling required.
          </div>
        </TabsContent>
      </TabsRootProvider>
    </div>
  );
};

export default TabsRootProviderDemo;
