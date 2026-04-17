import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const DatePickerMaxSelection = () => (
  <DatePicker className="w-72" selectionMode="multiple" maxSelectedDates={3}>
    <DatePickerLabel>Date</DatePickerLabel>
    <DatePickerInput placeholder="Select a date" />
    <DatePickerCalendar monthYearSelect />
  </DatePicker>
);

export default DatePickerMaxSelection;
