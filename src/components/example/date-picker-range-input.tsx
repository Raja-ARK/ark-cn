"use client";

import {
  DatePicker,
  DatePickerCalendar,
  DatePickerClearTrigger,
  DatePickerControl,
  DatePickerInputInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";
import { ButtonGroup, ButtonGroupSeparator } from "../ui/button-group";

const DatePickerRangeInput = () => (
  <DatePicker selectionMode="range" className="w-72">
    <DatePickerLabel>Date</DatePickerLabel>
    <DatePickerControl asChild>
      <ButtonGroup>
        <DatePickerInputInput index={0} />
        <ButtonGroupSeparator />
        <DatePickerInputInput index={1} />
        <ButtonGroupSeparator />
        <DatePickerClearTrigger />
        <ButtonGroupSeparator />
        <DatePickerCalendar />
      </ButtonGroup>
    </DatePickerControl>
    <DatePickerCalendar />
  </DatePicker>
);

export default DatePickerRangeInput;
