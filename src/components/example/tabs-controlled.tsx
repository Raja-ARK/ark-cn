import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsControlledDemo = () => {
  const [value, setValue] = useState<string | null>("account");

  return (
    <Tabs
      value={value}
      onValueChange={(e) => setValue(e.value)}
      variant="default"
      className="w-full max-w-md justify-center gap-3"
    >
      <div className="flex flex-wrap items-center gap-2">
        <Button
          size="sm"
          type="button"
          variant="outline"
          onClick={() => setValue("account")}
        >
          Select Account
        </Button>
        <Button
          size="sm"
          type="button"
          variant="outline"
          onClick={() => setValue("password")}
        >
          Select Password
        </Button>
        <Button
          size="sm"
          type="button"
          variant="outline"
          onClick={() => setValue("billing")}
        >
          Select Billing
        </Button>
        <div className="text-muted-foreground text-xs">
          current: <span className="font-medium text-foreground">{value}</span>
        </div>
      </div>
      <TabsList className="w-full justify-start">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
        <TabsTrigger value="billing">Billing</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <div className="text-muted-foreground text-sm">
          Controlled: manage <code className="text-foreground">value</code> +{" "}
          <code className="text-foreground">onValueChange</code>.
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="text-muted-foreground text-sm">
          Tabs can be <span className="text-foreground">deselectable</span> too.
        </div>
      </TabsContent>
      <TabsContent value="billing">
        <div className="text-muted-foreground text-sm">
          Indicator animation is driven by Ark CSS vars.
        </div>
      </TabsContent>
    </Tabs>
  );
};

export default TabsControlledDemo;
