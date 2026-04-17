import { parseDate } from "@ark-ui/react/date-picker";
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const startDate = new Date(new Date().setDate(new Date().getDate() - 30));
const endDate = new Date(new Date().setDate(new Date().getDate() + 30));

const DatePickerMinMaxDates = () => (
  <DatePicker
    className="w-72"
    min={parseDate(startDate)}
    max={parseDate(endDate)}
  >
    <DatePickerLabel>Date</DatePickerLabel>
    <DatePickerInput placeholder="Select a date" />
    <DatePickerCalendar monthYearSelect />
  </DatePicker>
);

export default DatePickerMinMaxDates;
