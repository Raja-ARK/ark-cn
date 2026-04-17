import {
  CheckIcon,
  ChevronRight,
  FileIcon,
  GlobeIcon,
  LayersIcon,
  MinusIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  createTreeCollection,
  TreeView,
  TreeViewBranch,
  TreeViewBranchContent,
  TreeViewBranchControl,
  TreeViewBranchIndentGuide,
  TreeViewBranchIndicator,
  TreeViewBranchText,
  TreeViewItem,
  TreeViewItemText,
  TreeViewLabel,
  TreeViewNodeCheckbox,
  TreeViewNodeCheckboxIndicator,
  TreeViewNodeContext,
  TreeViewNodeProvider,
  TreeViewNodeRenameInput,
  TreeViewTree,
} from "@/components/ui/tree-view";
import { cn } from "@/lib/utils";

// const TooltipMultipleTriggersDemo = () => {
//   const [activeTool, setActiveTool] = useState<
//     (typeof TOOLTIP_TOOLS)[number] | null
//   >(null);

//   return (
//     <Tooltip
//       onTriggerValueChange={(details) => {
//         setActiveTool(
//           TOOLTIP_TOOLS.find((tool) => tool.id === details.value) ?? null,
//         );
//       }}
//     >
//       <ButtonGroup
//         className="rounded-lg border border-border/70 p-1"
//         // attached={false}
//       >
//         {TOOLTIP_TOOLS.map((tool) => {
//           const Icon = tool.icon;
//           return (
//             <TooltipTrigger
//               key={tool.id}
//               className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
//               value={tool.id}
//             >
//               <Icon className="size-4" />
//             </TooltipTrigger>
//           );
//         })}
//       </ButtonGroup>
//       <TooltipPopup showArrow>
//         {activeTool ? (
//           <span className="inline-flex items-center gap-2">
//             <span>{activeTool.label}</span>
//             <span className="text-[0.65rem] text-muted-foreground">
//               {activeTool.shortcut}
//             </span>
//           </span>
//         ) : (
//           "Select a tool"
//         )}
//       </TooltipPopup>
//     </Tooltip>
//   );
// };

// const TooltipGroupedDemo = () => (
// <TooltipProvider>
// <div className="flex items-center gap-2">
//   {TOOLTIP_TOOLS.map((tool) => {
//     const Icon = tool.icon;

//     return (
//       <Tooltip key={tool.id}>
//         <TooltipTrigger
//         >
//           <Button size="icon-sm" variant="outline">
//           <Icon className="size-4" />
//           </Button>
//         </TooltipTrigger>
//         <TooltipPopup showArrow>{tool.label}</TooltipPopup>
//       </Tooltip>
//     );
//   })}
// </div>
// </TooltipProvider>
// );

// const TooltipAnimatedSharedDemo = () => {
//   const [activeTool, setActiveTool] = useState<
//     (typeof TOOLTIP_TOOLS)[number] | null
//   >(TOOLTIP_TOOLS[0] ?? null);

//   return (
//     // <TooltipProvider value={activeTool?.id}>
//       <Tooltip
//         // onTriggerValueChange={(details) => {
//         //   setActiveTool(
//         //     TOOLTIP_TOOLS.find((tool) => tool.id === details.value) ?? null,
//         //   );
//         // }}

//       >
//         <ButtonGroup
//           className="rounded-lg border border-border/70 p-1"
//         >
//           {TOOLTIP_TOOLS.map((tool) => {
//             const Icon = tool.icon;
//             return (
//               <TooltipTrigger
//                 key={tool.id}
//                 className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
//                 value={tool.id}
//               >
//                 <Icon aria-hidden className="size-4" />
//               </TooltipTrigger>
//             );
//           })}
//         </ButtonGroup>
//         <TooltipPopup showArrow className="transition-[width] duration-150">
//           {/* {activeTool ? (
//             <span className="inline-flex items-center gap-2">
//               <span>{activeTool.label}</span>
//               <span className="text-[0.65rem] text-muted-foreground">
//                 {activeTool.shortcut}
//               </span>
//             </span>
//           ) : null} */}
//         </TooltipPopup>
//       </Tooltip>
//     // </TooltipProvider>
//   );
// };

type ShowcaseTreeNode = {
  id: string;
  name: string;
  href?: string;
  children?: ShowcaseTreeNode[];
};

const TREE_ROOT: ShowcaseTreeNode = {
  id: "ROOT",
  name: "",
  children: [
    {
      id: "node_modules",
      name: "node_modules",
      children: [
        { id: "node_modules/zag-js", name: "zag-js" },
        { id: "node_modules/panda", name: "panda" },
        {
          id: "node_modules/@types",
          name: "@types",
          children: [
            { id: "node_modules/@types/react", name: "react" },
            { id: "node_modules/@types/react-dom", name: "react-dom" },
          ],
        },
      ],
    },
    {
      id: "src",
      name: "src",
      children: [
        { id: "src/app.tsx", name: "app.tsx", href: "/docs/introduction" },
        { id: "src/index.ts", name: "index.ts", href: "/docs/installation" },
      ],
    },
    { id: "package.json", name: "package.json" },
    {
      id: "README.md",
      name: "README.md",
      href: "https://ark-ui.com/docs/components/tree-view",
    },
  ],
};

const createShowcaseTreeCollection = () =>
  createTreeCollection<ShowcaseTreeNode>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: structuredClone(TREE_ROOT),
  });

const TreeNodeCheckboxControl = () => (
  <TreeViewNodeCheckbox
    className={cn(
      "cursor-pointer peer relative flex size-4 shrink-0 items-center justify-center rounded border transition-colors outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-invalid:border-destructive data-invalid:ring-3 data-invalid:ring-destructive/20 data-invalid:data-[state='checked']:border-primary dark:bg-input/30 dark:data-invalid:border-destructive/50 dark:data-invalid:ring-destructive/40 data-[state='checked']:border-primary data-[state='checked']:bg-primary data-[state='checked']:text-primary-foreground dark:data-[state='checked']:bg-primary",
    )}
  >
    <TreeViewNodeCheckboxIndicator
      className="grid place-content-center text-current transition-none [&>svg]:size-3.5"
      indeterminate={<MinusIcon />}
    >
      <CheckIcon />
    </TreeViewNodeCheckboxIndicator>
  </TreeViewNodeCheckbox>
);

const TreeNodeActions = ({
  node,
  indexPath,
  onAdd,
  onRemove,
}: {
  node: ShowcaseTreeNode;
  indexPath: number[];
  onAdd?: (node: ShowcaseTreeNode, indexPath: number[]) => void;
  onRemove?: (indexPath: number[]) => void;
}) => {
  if (!onAdd && !onRemove) return null;
  return (
    <div className="ms-auto inline-flex items-center gap-1">
      {onRemove ? (
        <Button
          className="h-6 px-2 text-xs"
          onClick={(event) => {
            event.stopPropagation();
            onRemove(indexPath);
          }}
          variant="outline"
        >
          Del
        </Button>
      ) : null}
      {onAdd && node.children ? (
        <Button
          className="h-6 px-2 text-xs"
          onClick={(event) => {
            event.stopPropagation();
            onAdd(node, indexPath);
          }}
          variant="outline"
        >
          Add
        </Button>
      ) : null}
    </div>
  );
};

const TreeNodeRenderer = ({
  node,
  indexPath,
  checkbox,
  links,
  rename,
  onAdd,
  onRemove,
}: {
  node: ShowcaseTreeNode;
  indexPath: number[];
  checkbox?: boolean;
  links?: boolean;
  rename?: boolean;
  onAdd?: (node: ShowcaseTreeNode, indexPath: number[]) => void;
  onRemove?: (indexPath: number[]) => void;
}) => (
  <TreeViewNodeProvider indexPath={indexPath} node={node}>
    <TreeViewNodeContext>
      {(nodeState) =>
        node.children ? (
          <TreeViewBranch>
            <TreeViewBranchControl
              data-depth={nodeState.depth}
              style={{
                paddingInlineStart: "calc((var(--depth) - 1) * 22px)",
              }}
            >
              <TreeViewBranchIndicator className="group/indicator">
                <ChevronRight className="size-4 transition-transform group-data-[state=open]/indicator:rotate-90" />
              </TreeViewBranchIndicator>
              {checkbox ? <TreeNodeCheckboxControl /> : null}
              {rename && nodeState.renaming ? (
                <TreeViewNodeRenameInput />
              ) : (
                <TreeViewBranchText>
                  <LayersIcon className="size-3.5 text-muted-foreground" />
                  {node.name}
                </TreeViewBranchText>
              )}
              <TreeNodeActions
                indexPath={indexPath}
                node={node}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            </TreeViewBranchControl>
            <TreeViewBranchContent>
              <TreeViewBranchIndentGuide />
              {node.children.map((child, childIndex) => (
                <TreeNodeRenderer
                  checkbox={checkbox}
                  indexPath={[...indexPath, childIndex]}
                  key={child.id}
                  links={links}
                  node={child}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  rename={rename}
                />
              ))}
            </TreeViewBranchContent>
          </TreeViewBranch>
        ) : (
          <TreeViewItem
            asChild={Boolean(links && node.href)}
            data-depth={nodeState.depth}
            style={{
              paddingInlineStart: "calc(((var(--depth) - 1) * 22px) + 22px)",
            }}
          >
            {links && node.href ? (
              <a
                className="flex w-full items-center gap-2"
                href={node.href}
                rel={node.href.startsWith("http") ? "noreferrer" : undefined}
                target={node.href.startsWith("http") ? "_blank" : undefined}
              >
                {checkbox ? <TreeNodeCheckboxControl /> : null}
                {rename && nodeState.renaming ? (
                  <TreeViewNodeRenameInput />
                ) : (
                  <TreeViewItemText>
                    <FileIcon className="size-3.5 text-muted-foreground" />
                    {node.name}
                  </TreeViewItemText>
                )}
                {node.href.startsWith("http") ? (
                  <GlobeIcon className="ms-auto size-3 text-muted-foreground" />
                ) : null}
                <TreeNodeActions
                  indexPath={indexPath}
                  node={node}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              </a>
            ) : (
              <>
                {checkbox ? <TreeNodeCheckboxControl /> : null}
                {rename && nodeState.renaming ? (
                  <TreeViewNodeRenameInput />
                ) : (
                  <TreeViewItemText>
                    <FileIcon className="size-3.5 text-muted-foreground" />
                    {node.name}
                  </TreeViewItemText>
                )}
                <TreeNodeActions
                  indexPath={indexPath}
                  node={node}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              </>
            )}
          </TreeViewItem>
        )
      }
    </TreeViewNodeContext>
  </TreeViewNodeProvider>
);

const TreeCheckboxDemo = () => {
  const collection = createShowcaseTreeCollection();
  return (
    <TreeView collection={collection} defaultCheckedValue={[]}>
      <TreeViewLabel>Checkbox Tree</TreeViewLabel>
      <TreeViewTree>
        {collection.rootNode.children?.map((node, index) => (
          <TreeNodeRenderer
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

export default TreeCheckboxDemo;
