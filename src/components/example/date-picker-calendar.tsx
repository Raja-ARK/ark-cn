import { DatePicker, DatePickerCalendar } from "@/components/ui/date-picker";

const DatePickerCalendarDemo = () => (
  <DatePicker
    className="w-72"
    selectionMode="multiple"
    maxSelectedDates={3}
    inline
  >
    <DatePickerCalendar />
  </DatePicker>
);

export default DatePickerCalendarDemo;
