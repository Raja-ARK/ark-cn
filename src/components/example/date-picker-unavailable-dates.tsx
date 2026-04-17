import type { DateValue } from "@ark-ui/react/date-picker";
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const isWeekend = (date: DateValue) => {
  const dayOfWeek = date.toDate("UTC").getDay();
  return dayOfWeek === 0 || dayOfWeek === 6;
};

const DatePickerUnavailableDates = () => (
  <DatePicker className="w-72" isDateUnavailable={isWeekend}>
    <DatePickerLabel>Date</DatePickerLabel>
    <DatePickerInput placeholder="Select a date" />
    <DatePickerCalendar />
  </DatePicker>
);

export default DatePickerUnavailableDates;
