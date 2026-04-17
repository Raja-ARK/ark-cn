import { useFilter } from "@ark-ui/react/locale";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  createShowcaseTreeCollection,
  TreeView,
  TreeViewShowcaseNodeRenderer,
  TreeViewTree,
} from "@/components/ui/tree-view";

const TreeViewFilteringDemo = () => {
  const { contains } = useFilter({ sensitivity: "base" });
  const [collection, setCollection] = useState(createShowcaseTreeCollection);

  return (
    <div className="flex flex-col gap-2">
      <Input
        className="h-8"
        onChange={(event) => {
          const value = event.target.value;
          const initialCollection = createShowcaseTreeCollection();
          const nextCollection =
            value.length > 0
              ? initialCollection.filter((node) => contains(node.name, value))
              : initialCollection;
          setCollection(nextCollection);
        }}
        placeholder="Filter nodes..."
      />
      <TreeView collection={collection}>
        <TreeViewTree>
          {collection.rootNode.children?.map((node, index) => (
            <TreeViewShowcaseNodeRenderer
              indexPath={[index]}
              key={node.id}
              node={node}
            />
          ))}
        </TreeViewTree>
      </TreeView>
    </div>
  );
};

export default TreeViewFilteringDemo;
