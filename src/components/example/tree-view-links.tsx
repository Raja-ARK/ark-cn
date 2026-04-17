import {
  createTreeCollection,
  TreeView,
  TreeViewLabel,
  TreeViewShowcaseNodeRenderer,
  TreeViewTree,
} from "@/components/ui/tree-view";

type TreeNodeData = {
  id: string;
  name: string;
  href?: string;
  children?: TreeNodeData[];
};

const collection = createTreeCollection<TreeNodeData>({
  nodeToValue: (node) => node.id,
  nodeToString: (node) => node.name,
  rootNode: {
    id: "ROOT",
    name: "",
    children: [
      {
        id: "docs",
        name: "Documentation",
        children: [
          {
            id: "docs/getting-started",
            name: "Getting Started",
            href: "https://ark-ui.com/docs/getting-started",
          },
          {
            id: "docs/installation",
            name: "Installation",
            href: "https://ark-ui.com/docs/installation",
          },
          {
            id: "docs/components",
            name: "Components",
            children: [
              {
                id: "docs/components/accordion",
                name: "Accordion",
                href: "https://ark-ui.com/docs/components/accordion",
              },
              {
                id: "docs/components/dialog",
                name: "Dialog",
                href: "https://ark-ui.com/docs/components/dialog",
              },
              {
                id: "docs/components/menu",
                name: "Menu",
                href: "https://ark-ui.com/docs/components/menu",
              },
            ],
          },
        ],
      },
      {
        id: "examples",
        name: "Examples",
        children: [
          {
            id: "examples/react",
            name: "React Examples",
            href: "https://ark-ui.com/examples/react",
          },
          {
            id: "examples/vue",
            name: "Vue Examples",
            href: "https://ark-ui.com/examples/vue",
          },
          {
            id: "examples/solid",
            name: "Solid Examples",
            href: "https://ark-ui.com/examples/solid",
          },
        ],
      },
      {
        id: "external",
        name: "External Links",
        children: [
          {
            id: "external/github",
            name: "GitHub Repository",
            href: "https://github.com/chakra-ui/zag",
          },
          {
            id: "external/npm",
            name: "NPM Package",
            href: "https://www.npmjs.com/package/@zag-js/core",
          },
          {
            id: "external/docs",
            name: "Official Docs",
            href: "https://zagjs.com",
          },
        ],
      },
      { id: "readme.md", name: "README.md", href: "/readme" },
      { id: "license", name: "LICENSE", href: "/license" },
    ],
  },
});

const TreeViewLinksDemo = () => {
  return (
    <TreeView collection={collection}>
      <TreeViewLabel>Docs</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeViewShowcaseNodeRenderer
            indexPath={[index]}
            key={node.id}
            links
            node={node}
          />
        ))}
      </TreeViewTree>
    </TreeView>
  );
};

export default TreeViewLinksDemo;
