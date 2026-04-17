import {
  createShowcaseTreeCollection,
  TreeView,
  TreeViewLabel,
  TreeViewShowcaseNodeRenderer,
  TreeViewTree,
} from "@/components/ui/tree-view";

const TreeViewCheckboxDemo = () => {
  const collection = createShowcaseTreeCollection();

  return (
    <TreeView collection={collection} defaultCheckedValue={[]}>
      <TreeViewLabel>Checkbox Tree</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeViewShowcaseNodeRenderer
            checkbox
            indexPath={[index]}
            key={node.id}
            node={node}
          />
        ))}
      </TreeViewTree>
    </TreeView>
  );
};

export default TreeViewCheckboxDemo;
