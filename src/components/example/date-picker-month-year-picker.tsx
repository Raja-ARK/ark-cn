import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const DatePickerMonthYearPicker = () => (
  <DatePicker className="w-72">
    <DatePickerLabel>Date</DatePickerLabel>
    <DatePickerInput placeholder="Select a date" />
    <DatePickerCalendar monthYearSelect />
  </DatePicker>
);

export default DatePickerMonthYearPicker;
