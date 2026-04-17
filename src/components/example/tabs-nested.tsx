import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const TabsNestedDemo = () => (
  <Tabs
    defaultValue="one"
    variant="underline"
    className="w-full max-w-md justify-center gap-3"
  >
    <TabsList className="w-full justify-start">
      <TabsTrigger value="one">Outer · One</TabsTrigger>
      <TabsTrigger value="two">Outer · Two</TabsTrigger>
    </TabsList>
    <TabsContent value="one">
      <div className="flex flex-col gap-3">
        <div className="text-muted-foreground text-sm">
          Nested tabs inside tab content.
        </div>
        <Tabs defaultValue="a" variant="default">
          <TabsList>
            <TabsTrigger value="a">Inner A</TabsTrigger>
            <TabsTrigger value="b">Inner B</TabsTrigger>
            <TabsTrigger value="c">Inner C</TabsTrigger>
          </TabsList>
          <TabsContent value="a">
            <div className="text-muted-foreground text-sm">Inner content A</div>
          </TabsContent>
          <TabsContent value="b">
            <div className="text-muted-foreground text-sm">Inner content B</div>
          </TabsContent>
          <TabsContent value="c">
            <div className="text-muted-foreground text-sm">Inner content C</div>
          </TabsContent>
        </Tabs>
      </div>
    </TabsContent>
    <TabsContent value="two">
      <div className="text-muted-foreground text-sm">
        Outer tab two content.
      </div>
    </TabsContent>
  </Tabs>
);

export default TabsNestedDemo;
