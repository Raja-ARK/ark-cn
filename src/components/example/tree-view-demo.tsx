import {
  createShowcaseTreeCollection,
  TreeView,
  TreeViewLabel,
  TreeViewShowcaseNodeRenderer,
  TreeViewTree,
} from "@/components/ui/tree-view";

const TreeViewDemo = () => {
  const collection = createShowcaseTreeCollection();

  return (
    <TreeView collection={collection}>
      <TreeViewLabel>Tree</TreeViewLabel>
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
  );
};

export default TreeViewDemo;
