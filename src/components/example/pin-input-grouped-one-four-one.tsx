import { Fragment } from "react";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";
import {
  PinInput,
  PinInputControl,
  PinInputLabel,
  PinInputRoot,
  PinInputSeparator,
} from "@/components/ui/pin-input";

const groups = [1, 4, 1];

const PinInputGroupedOneFourOne = () => (
  <PinInputRoot
    aria-label="Verification code"
    count={6}
    className="w-full max-w-md grid justify-center"
  >
    <PinInputLabel>Grouped 1-4-1</PinInputLabel>
    <PinInputControl className="flex w-max max-w-full flex-wrap items-center gap-2">
      {
        groups.reduce<{ elements: React.ReactNode[]; offset: number }>(
          (acc, size, groupIndex) => {
            acc.elements.push(
              <Fragment key={`g-${groupIndex}`}>
                {groupIndex > 0 ? <PinInputSeparator /> : null}
                <ButtonGroup>
                  {Array.from({ length: size }, (_, j) => {
                    const idx = acc.offset + j;
                    return (
                      <Fragment key={idx}>
                        {j > 0 ? <ButtonGroupSeparator /> : null}
                        <PinInput
                          className="box-border h-8 w-8 min-h-8 min-w-8 max-h-8 max-w-8 shrink-0 grow-0 basis-8 px-0 text-center tabular-nums text-sm font-medium leading-8 text-foreground placeholder:text-muted-foreground/72 rounded-lg border border-input bg-background not-dark:bg-clip-padding dark:bg-input/32 outline-none ring-ring/24 transition-[border-color,box-shadow,color,opacity] focus-visible:z-1 focus-visible:border-ring focus-visible:ring-3"
                          index={idx}
                        />
                      </Fragment>
                    );
                  })}
                </ButtonGroup>
              </Fragment>,
            );
            acc.offset += size;
            return acc;
          },
          { elements: [], offset: 0 },
        ).elements
      }
    </PinInputControl>
  </PinInputRoot>
);

export default PinInputGroupedOneFourOne;
