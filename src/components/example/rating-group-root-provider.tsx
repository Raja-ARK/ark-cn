import { Button } from "@/components/ui/button";
import {
  RatingGroupLabel,
  RatingGroupRootProvider,
  RatingStars,
  useRatingGroup,
} from "@/components/ui/rating-group";

const RatingGroupRootProviderDemo = () => {
  const store = useRatingGroup({ count: 5, defaultValue: 4 });

  return (
    <div className="flex max-w-md flex-col gap-2">
      <output className="text-muted-foreground text-xs">
        <span className="text-foreground">value:</span>{" "}
        <span className="font-medium tabular-nums text-foreground">
          {store.value}
        </span>
      </output>
      <RatingGroupRootProvider value={store}>
        <RatingGroupLabel>Label</RatingGroupLabel>
        <RatingStars />
      </RatingGroupRootProvider>
      <Button
        size="sm"
        type="button"
        variant="outline"
        onClick={() => {
          store.setValue(1);
        }}
      >
        Set to 1
      </Button>
    </div>
  );
};

export default RatingGroupRootProviderDemo;
