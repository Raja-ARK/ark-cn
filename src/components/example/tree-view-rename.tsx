import { useState } from "react";
import {
  createShowcaseTreeCollection,
  TreeView,
  TreeViewLabel,
  TreeViewShowcaseNodeRenderer,
  TreeViewTree,
} from "@/components/ui/tree-view";

const TreeViewRenameDemo = () => {
  const [collection, setCollection] = useState(createShowcaseTreeCollection);

  return (
    <TreeView
      canRename={() => true}
      collection={collection}
      onRenameComplete={(details) => {
        setCollection((previous) => {
          const node = previous.at(details.indexPath);
          if (!node) return previous;
          return previous.replace(details.indexPath, {
            ...node,
            name: details.label,
          });
        });
      }}
    >
      <TreeViewLabel>Rename Node (Press F2)</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeViewShowcaseNodeRenderer
            indexPath={[index]}
            key={node.id}
            node={node}
            rename
          />
        ))}
      </TreeViewTree>
    </TreeView>
  );
};

export default TreeViewRenameDemo;
