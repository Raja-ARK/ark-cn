import { Link } from "@tanstack/react-router";
import { getDocURl } from "@/lib/docs";
import { getComponentDocGroups } from "@/lib/docs-navigation";
import { buttonVariants } from "../ui/button";

export const ComponentsNavigation = () => {
  const groups = getComponentDocGroups();

  if (groups.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No component docs found yet.
      </p>
    );
  }

  return (
    <div className="not-prose space-y-8">
      {groups.map((group) => (
        <section key={group.key} className="space-y-3">
          <div className="space-y-1">
            <h2 className="text-lg font-semibold tracking-tight">
              {group.title}
            </h2>
            <p className="text-sm text-muted-foreground">
              {group.items.length} component
              {group.items.length === 1 ? "" : "s"}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.items.map((item) => {
              const docsPath = getDocURl(item.url) ?? "/docs";

              return (
                <Link
                  key={docsPath}
                  to={docsPath}
                  params={{ _splat: docsPath }}
                  className={buttonVariants({
                    variant: "link",
                    className: "h-auto justify-start px-0 text-left",
                  })}
                >
                  <p className="font-medium leading-tight">{item.title}</p>
                </Link>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
};
