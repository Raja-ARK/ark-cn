import { ChevronDownIcon, FileIcon, LayersIcon } from "lucide-react";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  createShowcaseTreeCollection,
  TreeViewBranchControl,
  TreeViewBranchIndicator,
  TreeViewBranchText,
  TreeViewItem,
  TreeViewItemText,
  TreeViewNodeProvider,
  TreeViewRootProvider,
  TreeViewTree,
  useTreeView,
} from "@/components/ui/tree-view";

const TREE_ROW_HEIGHT = 34;
const TREE_VIEWPORT_HEIGHT = 200;

const TreeViewVirtualizedDemo = () => {
  const scrollAreaRef = useRef<HTMLDivElement | null>(null);
  const [scrollTop, setScrollTop] = useState(0);

  const tree = useTreeView({
    collection: createShowcaseTreeCollection(),
    scrollToIndexFn: ({ index }) => {
      if (!scrollAreaRef.current) return;
      scrollAreaRef.current.scrollTop = index * TREE_ROW_HEIGHT;
    },
  });

  const visibleNodes = tree.getVisibleNodes();
  const startIndex = Math.max(0, Math.floor(scrollTop / TREE_ROW_HEIGHT));
  const endIndex = Math.min(
    visibleNodes.length,
    startIndex + Math.ceil(TREE_VIEWPORT_HEIGHT / TREE_ROW_HEIGHT) + 8,
  );
  const virtualRows = visibleNodes.slice(startIndex, endIndex);
  const paddingTop = startIndex * TREE_ROW_HEIGHT;
  const paddingBottom = Math.max(
    0,
    (visibleNodes.length - endIndex) * TREE_ROW_HEIGHT,
  );

  return (
    <TreeViewRootProvider value={tree}>
      <div className="mb-2 flex items-center gap-2">
        <Button
          className="h-8"
          onClick={() => tree.collapse()}
          variant="outline"
        >
          Collapse all
        </Button>
        <Button className="h-8" onClick={() => tree.expand()} variant="outline">
          Expand all
        </Button>
      </div>

      <TreeViewTree
        className="max-w-none overflow-auto rounded-md border border-border/70"
        onScroll={(event) => {
          setScrollTop(event.currentTarget.scrollTop);
        }}
        ref={scrollAreaRef}
        style={{ height: TREE_VIEWPORT_HEIGHT }}
      >
        <div style={{ paddingBottom, paddingTop }}>
          {virtualRows.map(({ node, indexPath }) => {
            const nodeState = tree.getNodeState({ indexPath, node });

            return (
              <TreeViewNodeProvider
                indexPath={indexPath}
                key={node.id}
                node={node}
              >
                {nodeState.isBranch ? (
                  <TreeViewBranchControl
                    style={{ paddingInlineStart: nodeState.depth * 18 + 8 }}
                  >
                    <TreeViewBranchIndicator>
                      <ChevronDownIcon className="size-3" />
                    </TreeViewBranchIndicator>
                    <TreeViewBranchText>
                      <LayersIcon className="size-3.5 text-muted-foreground" />
                      {node.name}
                    </TreeViewBranchText>
                  </TreeViewBranchControl>
                ) : (
                  <TreeViewItem
                    style={{ paddingInlineStart: nodeState.depth * 18 + 8 }}
                  >
                    <TreeViewItemText>
                      <FileIcon className="size-3.5 text-muted-foreground" />
                      {node.name}
                    </TreeViewItemText>
                  </TreeViewItem>
                )}
              </TreeViewNodeProvider>
            );
          })}
        </div>
      </TreeViewTree>

      <p className="mt-2 text-muted-foreground text-xs">
        Showing {visibleNodes.length} visible nodes with virtual windowing.
      </p>
    </TreeViewRootProvider>
  );
};

export default TreeViewVirtualizedDemo;
