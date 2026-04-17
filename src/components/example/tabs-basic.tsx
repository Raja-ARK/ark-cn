import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsBasicDemo = () => (
  <Tabs
    defaultValue="account"
    variant="default"
    className="w-full max-w-md grid justify-center"
  >
    <TabsList className="w-full justify-start">
      <TabsTrigger value="account">Account</TabsTrigger>
      <TabsTrigger value="password">Password</TabsTrigger>
      <TabsTrigger value="billing">Billing</TabsTrigger>
    </TabsList>
    <TabsContent
      value="account"
      className="min-w-xl border rounded-md p-3 min-h-32"
    >
      <div className="text-muted-foreground text-sm">
        Make changes to your account here.
      </div>
    </TabsContent>
    <TabsContent
      value="password"
      className="min-w-xl border rounded-md p-3 min-h-32"
    >
      <div className="text-muted-foreground text-sm">
        Change your password here.
      </div>
    </TabsContent>
    <TabsContent
      value="billing"
      className="min-w-xl border rounded-md p-3 min-h-32"
    >
      <div className="text-muted-foreground text-sm">
        Manage your billing and payment details.
      </div>
    </TabsContent>
  </Tabs>
);

export default TabsBasicDemo;
