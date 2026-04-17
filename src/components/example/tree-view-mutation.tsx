import { useState } from "react";
import {
  createShowcaseTreeCollection,
  type ShowcaseTreeNode,
  TreeView,
  TreeViewLabel,
  TreeViewShowcaseNodeRenderer,
  TreeViewTree,
} from "@/components/ui/tree-view";

const TreeViewMutationDemo = () => {
  const [collection, setCollection] = useState(createShowcaseTreeCollection);

  const handleRemove = (indexPath: number[]) => {
    setCollection((previous) => previous.remove([indexPath]));
  };

  const handleAdd = (node: ShowcaseTreeNode, indexPath: number[]) => {
    if (!node.children) return;

    const nextNode: ShowcaseTreeNode = {
      id: `${node.id}/new-${Date.now()}`,
      name: `untitled-${node.children.length + 1}.tsx`,
    };

    setCollection((previous) => {
      const currentNode = previous.at(indexPath);
      if (!currentNode || !currentNode.children) return previous;
      return previous.replace(indexPath, {
        ...currentNode,
        children: [nextNode, ...currentNode.children],
      });
    });
  };

  return (
    <TreeView collection={collection}>
      <TreeViewLabel>Mutation Tree</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeViewShowcaseNodeRenderer
            indexPath={[index]}
            key={node.id}
            node={node}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
      </TreeViewTree>
    </TreeView>
  );
};

export default TreeViewMutationDemo;
