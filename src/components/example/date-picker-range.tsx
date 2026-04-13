"use client";

import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const DatePickerRange = () => (
  <DatePicker selectionMode="single" className="w-64">
    <DatePickerLabel>Date</DatePickerLabel>
    <DatePickerInput variant="button" placeholder="Select a date" />
    <DatePickerCalendar />
  </DatePicker>
);

export default DatePickerRange;
