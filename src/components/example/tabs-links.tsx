import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsLinksDemo = () => (
  <Tabs
    defaultValue="account"
    variant="underline"
    className="w-full max-w-md justify-center gap-3"
  >
    <TabsList className="w-full justify-start">
      <TabsTrigger asChild value="account">
        <a className="no-underline" href="#account">
          Account
        </a>
      </TabsTrigger>
      <TabsTrigger asChild value="password">
        <a className="no-underline" href="#password">
          Password
        </a>
      </TabsTrigger>
      <TabsTrigger asChild value="billing">
        <a className="no-underline" href="#billing">
          Billing
        </a>
      </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <div className="text-muted-foreground text-sm">
        Triggers can render as links with{" "}
        <code className="text-foreground">asChild</code>.
      </div>
    </TabsContent>
    <TabsContent value="password">
      <div className="text-muted-foreground text-sm">
        Useful for router integration + SEO patterns.
      </div>
    </TabsContent>
    <TabsContent value="billing">
      <div className="text-muted-foreground text-sm">
        You can also use the Ark navigate API.
      </div>
    </TabsContent>
  </Tabs>
);

export default TabsLinksDemo;
