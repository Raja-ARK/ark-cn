"use client";

import {
  createTreeCollection,
  TreeView as TreeViewPrimitive,
} from "@ark-ui/react/tree-view";
import {
  CheckIcon,
  ChevronRight,
  FileIcon,
  GlobeIcon,
  LayersIcon,
  MinusIcon,
  PlusIcon,
  TrashIcon,
} from "lucide-react";
import { forwardRef } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type TreeViewProps<T> = TreeViewPrimitive.RootProps<T>;

export const TreeView = <T,>({ className, ...props }: TreeViewProps<T>) => (
  <TreeViewPrimitive.Root
    className={cn(
      "flex w-full max-w-md flex-col gap-2 text-sm text-foreground",
      className,
    )}
    data-slot="tree-view"
    {...props}
  />
);

export type TreeViewLabelProps = TreeViewPrimitive.LabelProps;

export const TreeViewLabel = ({ className, ...props }: TreeViewLabelProps) => (
  <TreeViewPrimitive.Label
    className={cn("font-medium text-sm", className)}
    data-slot="tree-view-label"
    {...props}
  />
);

export type TreeViewTreeProps = TreeViewPrimitive.TreeProps;

export const TreeViewTree = forwardRef<HTMLDivElement, TreeViewTreeProps>(
  ({ className, ...props }, ref) => (
    <TreeViewPrimitive.Tree
      ref={ref}
      className={cn("flex flex-col", className)}
      data-slot="tree-view-tree"
      {...props}
    />
  ),
);

export const TreeViewBranch = ({
  className,
  ...props
}: TreeViewPrimitive.BranchProps) => (
  <TreeViewPrimitive.Branch
    className={cn("relative", className)}
    data-slot="tree-view-branch"
    {...props}
  />
);

export const TreeViewBranchControl = ({
  className,
  ...props
}: TreeViewPrimitive.BranchControlProps) => (
  <TreeViewPrimitive.BranchControl
    className={cn(
      "group flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-start transition-colors hover:bg-accent/60 data-selected:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    data-slot="tree-view-branch-control"
    {...props}
  />
);

export const TreeViewBranchIndicator = ({
  className,
  ...props
}: TreeViewPrimitive.BranchIndicatorProps) => (
  <TreeViewPrimitive.BranchIndicator
    className={cn(
      "inline-flex size-4 items-center justify-center text-muted-foreground transition-transform data-state-open:rotate-90",
      className,
    )}
    data-slot="tree-view-branch-indicator"
    {...props}
  />
);

export const TreeViewBranchText = ({
  className,
  ...props
}: TreeViewPrimitive.BranchTextProps) => (
  <TreeViewPrimitive.BranchText
    className={cn(
      "inline-flex min-w-0 flex-1 items-center gap-2 truncate",
      className,
    )}
    data-slot="tree-view-branch-text"
    {...props}
  />
);

export const TreeViewBranchContent = ({
  className,
  ...props
}: TreeViewPrimitive.BranchContentProps) => (
  <TreeViewPrimitive.BranchContent
    className={cn("relative", className)}
    data-slot="tree-view-branch-content"
    {...props}
  />
);

export const TreeViewBranchIndentGuide = ({
  className,
  ...props
}: TreeViewPrimitive.BranchIndentGuideProps) => (
  <TreeViewPrimitive.BranchIndentGuide
    className={cn("absolute inset-y-0 inset-s-4 w-px bg-border/70", className)}
    data-slot="tree-view-branch-indent-guide"
    {...props}
  />
);

export const TreeViewItem = ({
  className,
  ...props
}: TreeViewPrimitive.ItemProps) => (
  <TreeViewPrimitive.Item
    className={cn(
      "flex w-full cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-start transition-colors hover:bg-accent/60 data-selected:bg-accent data-disabled:pointer-events-none data-disabled:opacity-50",
      className,
    )}
    data-slot="tree-view-item"
    {...props}
  />
);

export const TreeViewItemText = ({
  className,
  ...props
}: TreeViewPrimitive.ItemTextProps) => (
  <TreeViewPrimitive.ItemText
    className={cn(
      "inline-flex min-w-0 flex-1 items-center gap-2 truncate",
      className,
    )}
    data-slot="tree-view-item-text"
    {...props}
  />
);

export const TreeViewNodeCheckbox = ({
  className,
  ...props
}: TreeViewPrimitive.NodeCheckboxProps) => (
  <TreeViewPrimitive.NodeCheckbox
    className={cn(
      "inline-flex size-4 items-center justify-center rounded-sm border border-input bg-background text-primary data-state-checked:border-primary data-state-checked:bg-primary data-state-checked:text-primary-foreground data-state-indeterminate:border-primary data-state-indeterminate:bg-primary data-state-indeterminate:text-primary-foreground",
      className,
    )}
    data-slot="tree-view-node-checkbox"
    {...props}
  />
);

export const TreeViewNodeCheckboxIndicator = ({
  className,
  ...props
}: TreeViewPrimitive.NodeCheckboxIndicatorProps) => (
  <TreeViewPrimitive.NodeCheckboxIndicator
    className={cn("inline-flex items-center justify-center", className)}
    data-slot="tree-view-node-checkbox-indicator"
    {...props}
  />
);

export const TreeViewNodeRenameInput = ({
  className,
  ...props
}: TreeViewPrimitive.NodeRenameInputProps) => (
  <TreeViewPrimitive.NodeRenameInput
    className={cn(
      "h-7 min-w-0 flex-1 rounded border border-primary/50 bg-background px-1.5 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1",
      className,
    )}
    data-slot="tree-view-node-rename-input"
    {...props}
  />
);

export const TreeViewNodeProvider = TreeViewPrimitive.NodeProvider;
export const TreeViewNodeContext = TreeViewPrimitive.NodeContext;
export const TreeViewRootProvider = TreeViewPrimitive.RootProvider;

export type ShowcaseTreeNode = {
  id: string;
  name: string;
  href?: string;
  children?: ShowcaseTreeNode[];
};

export const TREE_VIEW_SHOWCASE_ROOT: ShowcaseTreeNode = {
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

export const createShowcaseTreeCollection = () =>
  createTreeCollection<ShowcaseTreeNode>({
    nodeToValue: (node) => node.id,
    nodeToString: (node) => node.name,
    rootNode: structuredClone(TREE_VIEW_SHOWCASE_ROOT),
  });

export const TreeViewShowcaseNodeCheckboxControl = () => (
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

type TreeViewShowcaseNodeActionsProps = {
  node: ShowcaseTreeNode;
  indexPath: number[];
  onAdd?: (node: ShowcaseTreeNode, indexPath: number[]) => void;
  onRemove?: (indexPath: number[]) => void;
};

export const TreeViewShowcaseNodeActions = ({
  node,
  indexPath,
  onAdd,
  onRemove,
}: TreeViewShowcaseNodeActionsProps) => {
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
          size="icon-sm"
        >
          <TrashIcon className="size-3.5 text-muted-foreground" />
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
          size="icon-sm"
        >
          <PlusIcon className="size-3.5 text-muted-foreground" />
        </Button>
      ) : null}
    </div>
  );
};

export type TreeViewShowcaseNodeRendererProps = {
  node: ShowcaseTreeNode;
  indexPath: number[];
  checkbox?: boolean;
  links?: boolean;
  rename?: boolean;
  onAdd?: (node: ShowcaseTreeNode, indexPath: number[]) => void;
  onRemove?: (indexPath: number[]) => void;
};

export const TreeViewShowcaseNodeRenderer = ({
  node,
  indexPath,
  checkbox,
  links,
  rename,
  onAdd,
  onRemove,
}: TreeViewShowcaseNodeRendererProps) => (
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
                <ChevronRight className="size-4 transition-transform rtl:rotate-180 group-data-[state=open]/indicator:rotate-90 rtl:group-data-[state=open]/indicator:rotate-90" />
              </TreeViewBranchIndicator>
              {checkbox ? <TreeViewShowcaseNodeCheckboxControl /> : null}
              {rename && nodeState.renaming ? (
                <TreeViewNodeRenameInput />
              ) : (
                <TreeViewBranchText>
                  <LayersIcon className="size-3.5 text-muted-foreground" />
                  {node.name}
                </TreeViewBranchText>
              )}
              <TreeViewShowcaseNodeActions
                indexPath={indexPath}
                node={node}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            </TreeViewBranchControl>
            <TreeViewBranchContent>
              <TreeViewBranchIndentGuide />
              {node.children.map((child, childIndex) => (
                <TreeViewShowcaseNodeRenderer
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
                {checkbox ? <TreeViewShowcaseNodeCheckboxControl /> : null}
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
                <TreeViewShowcaseNodeActions
                  indexPath={indexPath}
                  node={node}
                  onAdd={onAdd}
                  onRemove={onRemove}
                />
              </a>
            ) : (
              <>
                {checkbox ? <TreeViewShowcaseNodeCheckboxControl /> : null}
                {rename && nodeState.renaming ? (
                  <TreeViewNodeRenameInput />
                ) : (
                  <TreeViewItemText>
                    <FileIcon className="size-3.5 text-muted-foreground" />
                    {node.name}
                  </TreeViewItemText>
                )}
                <TreeViewShowcaseNodeActions
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

export {
  createTreeCollection,
  useTreeView,
  useTreeViewContext,
} from "@ark-ui/react/tree-view";
