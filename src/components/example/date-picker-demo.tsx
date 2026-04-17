import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const DatePickerDemo = () => (
  <DatePicker className="w-72">
    <DatePickerLabel>Date</DatePickerLabel>
    <DatePickerInput placeholder="Select a date" />
    <DatePickerCalendar />
  </DatePicker>
);

export default DatePickerDemo;
