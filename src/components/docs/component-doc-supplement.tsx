import {
  type DocPropRow,
  DocPropsTable,
} from "@/components/docs/docs-props-table";

type ComponentExtensionProps = Record<string, DocPropRow[]>;

const EXTENSION_PROPS: Record<string, ComponentExtensionProps> = {
  accordion: {
    AccordionTrigger: [
      {
        prop: "indicator?",
        type: "ReactNode",
        description:
          "Optional node rendered inside ItemIndicator instead of the default ChevronDown icon.",
      },
    ],
    AccordionPanel: [
      {
        prop: "containerClassName?",
        type: "string",
        description:
          "Merged onto the inner padded div that wraps children. Use Ark\u2019s className on ItemContent for the animated outer shell; use containerClassName for inner padding, borders, and body layout.",
      },
    ],
  },

  "alert-dialog": {
    AlertDialogPopup: [
      {
        prop: "backdropClassName?",
        type: "string",
        description: "Extra class for the backdrop element.",
      },
      {
        prop: "bottomStickOnMobile?",
        type: "boolean",
        description:
          "Bottom-aligned positioner on small screens instead of centered.",
      },
      {
        prop: "positionerClassName?",
        type: "string",
        description: "Extra class on the positioner wrapper.",
      },
      {
        prop: "size?",
        type: '"default" | "sm"',
        description: "Preset max-width for the content shell.",
      },
    ],
    AlertDialogFooter: [
      {
        prop: "variant?",
        type: '"default" | "bare"',
        description: "Bordered/muted footer bar vs minimal padding only.",
      },
    ],
    AlertDialogCancel: [
      {
        prop: "variant?",
        type: "ButtonVariant",
        description:
          "Button style preset for the cancel trigger (default ghost).",
      },
    ],
    AlertDialogAction: [
      {
        prop: "variant?",
        type: "ButtonVariant",
        description: "Button style preset for the action trigger.",
      },
    ],
  },

  "angle-slider": {
    AngleSlider: [
      {
        prop: "variant?",
        type: '"labeled" | "ring" | "rotation" | "split" | "ticks"',
        description: "Built-in visual layout for the dial.",
      },
      {
        prop: "footer?",
        type: "ReactNode",
        description: "Renders after the control.",
      },
      {
        prop: "size?",
        type: "number",
        description: "Outer control diameter in px.",
      },
    ],
  },

  badge: {
    Badge: [
      {
        prop: "variant?",
        type: '"default" | "secondary" | "destructive" | "outline" | "info" | "success" | "warning"',
        description: "Semantic color preset.",
      },
      {
        prop: "size?",
        type: '"default" | "sm" | "lg"',
        description: "Density/size preset.",
      },
    ],
  },

  button: {
    Button: [
      {
        prop: "variant?",
        type: '"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "info" | "success" | "warning" | "destructive-outline"',
        description: "Visual style preset.",
      },
      {
        prop: "size?",
        type: '"default" | "sm" | "lg" | "xl" | "xs" | "icon" | "icon-xs" | "icon-sm" | "icon-lg"',
        description: "Size preset including icon-only sizes.",
      },
      {
        prop: "loading?",
        type: "boolean",
        description: "Shows spinner, sets aria-disabled and data-loading.",
      },
    ],
  },

  carousel: {
    CarouselPrevious: [
      {
        prop: "variant?",
        type: "ButtonVariant",
        description: "Button style preset (default outline).",
      },
      {
        prop: "size?",
        type: "ButtonSize",
        description: "Button size (default icon-sm).",
      },
      {
        prop: "anchorButtons?",
        type: "boolean",
        description:
          "Positions the control as a floating anchored button outside the carousel.",
      },
    ],
    CarouselNext: [
      {
        prop: "variant?",
        type: "ButtonVariant",
        description: "Button style preset (default outline).",
      },
      {
        prop: "size?",
        type: "ButtonSize",
        description: "Button size (default icon-sm).",
      },
      {
        prop: "anchorButtons?",
        type: "boolean",
        description:
          "Positions the control as a floating anchored button outside the carousel.",
      },
    ],
    CarouselAutoplay: [
      {
        prop: "variant?",
        type: "ButtonVariant",
        description: "Button style preset (default outline).",
      },
      {
        prop: "size?",
        type: "ButtonSize",
        description: "Button size (default icon-sm).",
      },
    ],
  },

  combobox: {
    Combobox: [
      {
        prop: "children?",
        type: "ReactNode | ((api: UseComboboxContext<T>) => ReactNode)",
        description: "Render-prop or static children.",
      },
      {
        prop: "items?",
        type: "T[]",
        description: "List of items when not passing a custom collection.",
      },
      {
        prop: "collection?",
        type: "ListCollection<T>",
        description: "Pre-built collection (alternative to items).",
      },
    ],
    ComboboxInput: [
      {
        prop: "size?",
        type: '"default" | "sm" | "lg"',
        description: "Input group size.",
      },
      {
        prop: "startAddon?",
        type: "ReactNode",
        description: "Slot before the input field.",
      },
      {
        prop: "endAddon?",
        type: "ReactNode",
        description: "Slot after the input field.",
      },
      {
        prop: "showClear?",
        type: "boolean",
        description: "Toggles the clear control.",
      },
      {
        prop: "showIndicator?",
        type: "boolean",
        description: "Toggles the open/chevron indicator.",
      },
    ],
    ComboboxPopup: [
      {
        prop: "disablePortal?",
        type: "boolean",
        description: "Renders content in-place instead of portaled.",
      },
    ],
  },

  command: {
    CommandDialogPopup: [
      {
        prop: "backdropClassName?",
        type: "string",
        description: "Extra class on the backdrop.",
      },
      {
        prop: "positionerClassName?",
        type: "string",
        description: "Extra class on the positioner wrapper.",
      },
    ],
  },

  "date-picker": {
    DatePickerInput: [
      {
        prop: "size?",
        type: '"default" | "sm" | "lg"',
        description: "Input size tier.",
      },
      {
        prop: "variant?",
        type: '"button" | "input"',
        description: "Button-style trigger vs input-group field.",
      },
      {
        prop: "startAddon?",
        type: "ReactNode",
        description: "Slot before the field.",
      },
      {
        prop: "endAddon?",
        type: "ReactNode",
        description: "Slot after the field.",
      },
      {
        prop: "showClear?",
        type: "boolean",
        description: "Toggles the clear control.",
      },
      {
        prop: "containerClassName?",
        type: "string",
        description: "Wrapper class for the control.",
      },
      {
        prop: "placeholder?",
        type: "string",
        description: "Placeholder text.",
      },
      {
        prop: "separator?",
        type: "string",
        description: "Separator for range display in button variant.",
      },
    ],
    DatePickerViewTrigger: [
      {
        prop: "viewTriggerTextOnly?",
        type: "boolean",
        description: "Replaces trigger with centered DatePickerRangeText.",
      },
      {
        prop: "monthYearSelect?",
        type: "boolean",
        description:
          "On day view, replaces title with month/year Select controls.",
      },
    ],
    DatePickerCalendar: [
      {
        prop: "enablePresets?",
        type: "boolean",
        description: "Shows preset quick-range buttons.",
      },
      {
        prop: "viewTriggerTextOnly?",
        type: "boolean",
        description: "Forwarded to calendar view headers.",
      },
      {
        prop: "monthYearSelect?",
        type: "boolean",
        description: "Forwarded to calendar view headers.",
      },
      {
        prop: "monthColumns?",
        type: "number",
        description: "Grid column count for month view.",
      },
      {
        prop: "yearColumns?",
        type: "number",
        description: "Grid column count for year view.",
      },
    ],
  },

  dialog: {
    DialogPopup: [
      {
        prop: "backdropClassName?",
        type: "string",
        description: "Extra class for the backdrop element.",
      },
      {
        prop: "bottomStickOnMobile?",
        type: "boolean",
        description:
          "Bottom-aligned positioner on small screens instead of centered.",
      },
      {
        prop: "closeProps?",
        type: "CloseTriggerProps",
        description: "Props forwarded to the built-in close button.",
      },
      {
        prop: "positionerClassName?",
        type: "string",
        description: "Extra class on the positioner wrapper.",
      },
      {
        prop: "showCloseButton?",
        type: "boolean",
        description: "Toggles the default close button.",
      },
      {
        prop: "size?",
        type: '"default" | "sm"',
        description: "Preset max-width for the content shell.",
      },
    ],
    DialogFooter: [
      {
        prop: "variant?",
        type: '"default" | "bare"',
        description: "Bordered/muted footer bar vs minimal padding only.",
      },
    ],
    DialogPanel: [
      {
        prop: "scrollFade?",
        type: "boolean",
        description: "Applies a vertical fade mask on scroll overflow.",
      },
      {
        prop: "scrollable?",
        type: "boolean",
        description: "Enables vertical scrolling with stable scrollbar gutter.",
      },
    ],
  },

  "file-upload": {
    FileUploadItemDeleteTrigger: [
      {
        prop: "variant?",
        type: "ButtonVariant",
        description: "Button style for the delete control (default ghost).",
      },
      {
        prop: "size?",
        type: "ButtonSize",
        description: "Button size for the delete control (default icon-xs).",
      },
    ],
  },

  "floating-panel": {
    FloatingPanelPopup: [
      {
        prop: "disablePortal?",
        type: "boolean",
        description: "Renders content in-place instead of portaled.",
      },
      {
        prop: "positionerClassName?",
        type: "string",
        description: "Extra class on the positioner wrapper.",
      },
    ],
  },

  "hover-card": {
    HoverCardPopup: [
      {
        prop: "arrowClassName?",
        type: "string",
        description: "Class on the arrow element.",
      },
      {
        prop: "arrowTipClassName?",
        type: "string",
        description: "Class on the arrow tip.",
      },
      {
        prop: "disablePortal?",
        type: "boolean",
        description: "Renders content in-place instead of portaled.",
      },
      {
        prop: "positionerClassName?",
        type: "string",
        description: "Extra class on the positioner wrapper.",
      },
      {
        prop: "showArrow?",
        type: "boolean",
        description: "Toggles the arrow (default true).",
      },
    ],
  },

  input: {
    Input: [
      {
        prop: "size?",
        type: '"sm" | "default" | "lg" | number',
        description:
          "Visual height tier; number forwards to native size attribute.",
      },
      {
        prop: "unstyled?",
        type: "boolean",
        description: "Skips the bordered control chrome.",
      },
      {
        prop: "nativeInput?",
        type: "boolean",
        description: "Uses a plain <input> instead of ark.input.",
      },
    ],
  },

  "input-group": {
    InputGroupAddon: [
      {
        prop: "align?",
        type: '"inline-start" | "inline-end" | "block-start" | "block-end"',
        description: "Placement of the addon region.",
      },
    ],
    InputGroupInput: [
      {
        prop: "size?",
        type: '"sm" | "default" | "lg" | number',
        description: "Field height token inside the group.",
      },
    ],
    InputGroupTextarea: [
      {
        prop: "size?",
        type: '"sm" | "default" | "lg"',
        description: "Min-height/padding for grouped textarea.",
      },
    ],
  },

  menu: {
    MenuPopup: [
      {
        prop: "arrowClassName?",
        type: "string",
        description: "Class on the arrow element.",
      },
      {
        prop: "arrowTipClassName?",
        type: "string",
        description: "Class on the arrow tip.",
      },
      {
        prop: "disablePortal?",
        type: "boolean",
        description: "Renders content in-place instead of portaled.",
      },
      {
        prop: "positionerClassName?",
        type: "string",
        description: "Extra class on the positioner wrapper.",
      },
      {
        prop: "showArrow?",
        type: "boolean",
        description: "Toggles the arrow (default false).",
      },
    ],
  },

  "number-field": {
    NumberFieldInput: [
      {
        prop: "size?",
        type: '"sm" | "default" | "lg"',
        description: "Input group size.",
      },
      {
        prop: "inputClassName?",
        type: "string",
        description: "Class on the inner input element.",
      },
      {
        prop: "inputProps?",
        type: "NumberFieldInputProps",
        description: "Forwarded to the underlying NumberField.Input.",
      },
      {
        prop: "controlProps?",
        type: "NumberFieldControlProps",
        description: "Forwarded to the wrapping Control.",
      },
      {
        prop: "withoutControl?",
        type: "boolean",
        description:
          "Renders only the input group without the wrapping Control.",
      },
      {
        prop: "showTrigger?",
        type: "boolean",
        description: "Shows increment/decrement UI.",
      },
      {
        prop: "triggerVariant?",
        type: '"between" | "end"',
        description: "Placement of +/\u2212 controls.",
      },
      {
        prop: "startAddon?",
        type: "ReactNode",
        description: "Slot before the input.",
      },
      {
        prop: "endAddon?",
        type: "ReactNode",
        description: "Slot after the input.",
      },
    ],
  },

  pagination: {
    PaginationItems: [
      {
        prop: "itemType?",
        type: '"button" | "link"',
        description: "Renders page items as Button or styled anchor.",
      },
      {
        prop: "size?",
        type: "ButtonSize",
        description: "Button size for page controls.",
      },
      {
        prop: "variant?",
        type: "ButtonVariant",
        description:
          "Button variant for page controls (current page forces outline).",
      },
    ],
  },

  "password-input": {
    PasswordInput: [
      {
        prop: "startAddon?",
        type: "ReactNode",
        description: "Slot before the input.",
      },
      {
        prop: "endAddon?",
        type: "ReactNode",
        description: "Slot after the input.",
      },
      {
        prop: "variant?",
        type: "ButtonVariant",
        description: "Button style for the visibility toggle (default ghost).",
      },
      {
        prop: "size?",
        type: "ButtonSize",
        description: "Button size for the visibility toggle (default icon-xs).",
      },
      {
        prop: "hideVisibilityToggle?",
        type: "boolean",
        description: "Removes the eye toggle from the end addon.",
      },
    ],
  },

  popover: {
    PopoverPopup: [
      {
        prop: "arrowClassName?",
        type: "string",
        description: "Class on the arrow element.",
      },
      {
        prop: "arrowTipClassName?",
        type: "string",
        description: "Class on the arrow tip.",
      },
      {
        prop: "disablePortal?",
        type: "boolean",
        description: "Renders content in-place instead of portaled.",
      },
      {
        prop: "positionerClassName?",
        type: "string",
        description: "Extra class on the positioner wrapper.",
      },
      {
        prop: "showArrow?",
        type: "boolean",
        description: "Toggles the arrow (default true).",
      },
    ],
  },

  "progress-circular": {
    ProgressCircular: [
      {
        prop: "variant?",
        type: '"labeled" | "ring" | "row"',
        description: "Layout variant.",
      },
      {
        prop: "footer?",
        type: "ReactNode",
        description: "Renders below the ring.",
      },
      {
        prop: "label?",
        type: "ReactNode",
        description: "Optional title above the ring.",
      },
      {
        prop: "showCenterValue?",
        type: "boolean",
        description: "Overlays value text in the center.",
      },
      {
        prop: "showThumb?",
        type: "boolean",
        description: "Renders a thumb on the ring.",
      },
      {
        prop: "size?",
        type: "number",
        description: "Outer diameter in px (default 120).",
      },
      {
        prop: "thickness?",
        type: "number",
        description: "Stroke thickness (default 8).",
      },
    ],
  },

  "progress-linear": {
    ProgressLinear: [
      {
        prop: "label?",
        type: "ReactNode",
        description: "Optional label above the track.",
      },
      {
        prop: "showValueText?",
        type: "boolean",
        description: "Shows the value text on the right.",
      },
      {
        prop: "size?",
        type: '"sm" | "md" | "lg"',
        description: "Track height tier.",
      },
      {
        prop: "trackClassName?",
        type: "string",
        description: "Class on the track element.",
      },
      {
        prop: "rangeClassName?",
        type: "string",
        description: "Class on the range fill.",
      },
      {
        prop: "valueTextClassName?",
        type: "string",
        description: "Class on the value text.",
      },
    ],
  },

  "scroll-area": {
    ScrollArea: [
      {
        prop: "scrollFade?",
        type: "boolean",
        description: "Applies a vertical fade mask on the viewport.",
      },
      {
        prop: "scrollbarGutter?",
        type: "boolean",
        description: "Reserves inline end space for scrollbar stability.",
      },
    ],
    ScrollAreaRoot: [
      {
        prop: "scrollbarVisibility?",
        type: '"hover" | "always"',
        description: "Controls scrollbar opacity/pointer behavior.",
      },
    ],
  },

  "segment-group": {
    SegmentGroupRoot: [
      {
        prop: "variant?",
        type: '"default" | "underline"',
        description: "Chrome variant for items and indicator.",
      },
    ],
  },

  select: {
    Select: [
      {
        prop: "children?",
        type: "ReactNode | ((api: UseSelectContext<T>) => ReactNode)",
        description: "Render-prop or static children.",
      },
      {
        prop: "items?",
        type: "T[]",
        description: "List of items when not passing a custom collection.",
      },
      {
        prop: "collection?",
        type: "ListCollection<T>",
        description: "Pre-built collection (alternative to items).",
      },
    ],
    SelectTriggerField: [
      {
        prop: "size?",
        type: "ButtonSize",
        description: "Outline trigger button size.",
      },
      {
        prop: "showClear?",
        type: "boolean",
        description: "Shows a clear control in the trigger.",
      },
      {
        prop: "hideIndicator?",
        type: "boolean",
        description: "Hides the dropdown indicator.",
      },
      {
        prop: "containerClass?",
        type: "string",
        description: "Class on the wrapping ButtonGroup.",
      },
    ],
    SelectPopup: [
      {
        prop: "disablePortal?",
        type: "boolean",
        description: "Renders content in-place instead of portaled.",
      },
    ],
    SelectValue: [
      {
        prop: "children?",
        type: "(api: UseSelectContext<T>) => ReactNode",
        description: "Custom value rendering.",
      },
      {
        prop: "placeholder?",
        type: "string",
        description: "Empty-state label.",
      },
    ],
  },

  sheet: {
    SheetPopup: [
      {
        prop: "backdropClassName?",
        type: "string",
        description: "Extra class on the backdrop.",
      },
      {
        prop: "closeProps?",
        type: "CloseTriggerProps",
        description: "Props forwarded to the built-in close button.",
      },
      {
        prop: "showCloseButton?",
        type: "boolean",
        description: "Toggles the default close button.",
      },
      {
        prop: "side?",
        type: '"right" | "left" | "top" | "bottom"',
        description: "Slide-in edge and animation direction.",
      },
      {
        prop: "variant?",
        type: '"default" | "inset"',
        description: "Full-bleed edge vs inset rounded floating panel.",
      },
    ],
    SheetFooter: [
      {
        prop: "variant?",
        type: '"default" | "bare"',
        description: "Bordered/muted footer vs borderless.",
      },
    ],
    SheetPanel: [
      {
        prop: "scrollFade?",
        type: "boolean",
        description: "Enables edge fade on scroll in the inner ScrollArea.",
      },
    ],
  },

  sidebar: {
    SidebarProvider: [
      {
        prop: "defaultOpen?",
        type: "boolean",
        description: "Uncontrolled initial open state (desktop).",
      },
      { prop: "open?", type: "boolean", description: "Controlled open state." },
      {
        prop: "onOpenChange?",
        type: "(open: boolean) => void",
        description: "Controlled callback.",
      },
    ],
    Sidebar: [
      {
        prop: "side?",
        type: '"left" | "right"',
        description: "Which edge the sidebar attaches to.",
      },
      {
        prop: "variant?",
        type: '"sidebar" | "floating" | "inset"',
        description: "Layout/visual variant.",
      },
      {
        prop: "collapsible?",
        type: '"offcanvas" | "icon" | "none"',
        description: "Collapse behavior.",
      },
    ],
    SidebarMenuButton: [
      {
        prop: "isActive?",
        type: "boolean",
        description: "Sets data-active for selected styling.",
      },
      {
        prop: "tooltip?",
        type: "string | TooltipPopupProps",
        description: "Tooltip shown when sidebar is collapsed.",
      },
      {
        prop: "variant?",
        type: '"default" | "outline"',
        description: "Button style preset.",
      },
      {
        prop: "size?",
        type: '"default" | "sm" | "lg"',
        description: "Button size preset.",
      },
    ],
    SidebarMenuAction: [
      {
        prop: "showOnHover?",
        type: "boolean",
        description: "Reveals the action only on row hover/focus.",
      },
    ],
  },

  "signature-pad": {
    SignaturePad: [
      {
        prop: "width?",
        type: "string | number",
        description: "Sets --signature-pad-width (default 20rem).",
      },
      {
        prop: "height?",
        type: "string | number",
        description: "Sets --signature-pad-height (default 10rem).",
      },
    ],
    SignaturePadClearTrigger: [
      {
        prop: "variant?",
        type: "ButtonVariant",
        description: "Button style for the clear control (default ghost).",
      },
      {
        prop: "size?",
        type: "ButtonSize",
        description: "Button size for the clear control (default icon-sm).",
      },
    ],
    SignaturePadField: [
      {
        prop: "hideGuide?",
        type: "boolean",
        description: "Omits the guide line when true.",
      },
      {
        prop: "clearTriggerProps?",
        type: "ClearTriggerProps",
        description: "Extra props for the clear trigger.",
      },
    ],
  },

  slider: {
    Slider: [
      {
        prop: "defaultValue?",
        type: "number | number[]",
        description:
          "Accepts scalar or array; normalized to Ark\u2019s array form.",
      },
      {
        prop: "value?",
        type: "number | number[]",
        description: "Controlled value; accepts scalar or array.",
      },
    ],
    SliderField: [
      {
        prop: "trackProps?",
        type: "SliderTrackProps",
        description: "Forwarded to the track element.",
      },
      {
        prop: "rangeProps?",
        type: "SliderRangeProps",
        description: "Forwarded to the range fill element.",
      },
      {
        prop: "thumbsProps?",
        type: "{ children?: (index: number) => ReactNode }",
        description: "Custom thumb contents per index.",
      },
    ],
  },

  splitter: {
    SplitterResizeTrigger: [
      {
        prop: "withHandle?",
        type: "boolean",
        description: "Renders a centered indicator handle.",
      },
      {
        prop: "indicatorClassName?",
        type: "string",
        description: "Class on the indicator when withHandle is true.",
      },
    ],
  },

  tabs: {
    Tabs: [
      {
        prop: "variant?",
        type: '"default" | "underline"',
        description: "Chrome variant for list and triggers.",
      },
    ],
    TabsList: [
      {
        prop: "withIndicator?",
        type: "boolean",
        description: "Renders the sliding indicator.",
      },
      {
        prop: "indicatorClassName?",
        type: "string",
        description: "Extra class on the indicator.",
      },
    ],
  },

  textarea: {
    Textarea: [
      {
        prop: "size?",
        type: '"sm" | "default" | "lg" | number',
        description: "Min-height/padding tier.",
      },
      {
        prop: "unstyled?",
        type: "boolean",
        description: "Skips the bordered wrapper chrome.",
      },
    ],
  },

  toast: {
    ToastIndicator: [
      {
        prop: "type?",
        type: "string",
        description:
          "Selects icon and color (success, error, warning, info, loading, etc.).",
      },
    ],
  },

  "toggle-group": {
    ToggleGroup: [
      {
        prop: "size?",
        type: '"default" | "sm" | "lg"',
        description: "Default size for items via context.",
      },
      {
        prop: "variant?",
        type: '"default" | "outline"',
        description: "Default item chrome variant.",
      },
    ],
    ToggleGroupItem: [
      {
        prop: "size?",
        type: '"default" | "sm" | "lg"',
        description: "Per-item size override.",
      },
      {
        prop: "variant?",
        type: '"default" | "outline"',
        description: "Per-item variant override.",
      },
    ],
    ToggleGroupSeparator: [
      {
        prop: "orientation?",
        type: '"horizontal" | "vertical"',
        description: "Separator direction.",
      },
    ],
  },

  tooltip: {
    TooltipPopup: [
      {
        prop: "arrowClassName?",
        type: "string",
        description: "Class on the arrow element.",
      },
      {
        prop: "arrowTipClassName?",
        type: "string",
        description: "Class on the arrow tip.",
      },
      {
        prop: "disablePortal?",
        type: "boolean",
        description: "Renders content in-place instead of portaled.",
      },
      {
        prop: "positionerClassName?",
        type: "string",
        description: "Extra class on the positioner wrapper.",
      },
      {
        prop: "showArrow?",
        type: "boolean",
        description: "Toggles the arrow (default true).",
      },
    ],
  },

  tour: {
    TourPopup: [
      {
        prop: "arrowClassName?",
        type: "string",
        description: "Class on the arrow element.",
      },
      {
        prop: "arrowTipClassName?",
        type: "string",
        description: "Class on the arrow tip.",
      },
      {
        prop: "disablePortal?",
        type: "boolean",
        description: "Renders content in-place instead of portaled.",
      },
      {
        prop: "positionerClassName?",
        type: "string",
        description: "Extra class on the positioner wrapper.",
      },
      {
        prop: "showArrow?",
        type: "boolean",
        description: "Toggles the arrow (default true).",
      },
    ],
    TourFrame: [
      {
        prop: "showProgressBar?",
        type: "boolean",
        description: "Renders a bottom progress bar.",
      },
    ],
  },

  "zoom-image": {
    ZoomImage: [
      { prop: "alt", type: "string", description: "Required image alt text." },
      { prop: "src", type: "string", description: "Required image URL." },
      {
        prop: "viewportClassName?",
        type: "string",
        description: "Class on the viewport wrapper.",
      },
    ],
  },
};

export type ComponentDocSupplementProps = {
  component: string;
  section: "extension-props";
};

export const ComponentDocSupplement = ({
  component,
  section,
}: ComponentDocSupplementProps) => {
  if (section !== "extension-props") return null;

  const data = EXTENSION_PROPS[component];
  if (!data) return null;

  const entries = Object.entries(data);
  if (!entries.length) return null;

  return (
    <div className="not-prose flex flex-col gap-8">
      {entries.map(([subComponent, rows]) => (
        <div key={subComponent}>
          <h4 className="mb-2 font-semibold text-foreground text-sm tracking-tight">
            {subComponent}
          </h4>
          <DocPropsTable rows={rows} />
        </div>
      ))}
    </div>
  );
};
