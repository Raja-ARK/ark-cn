import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const DatePickerSingle = () => (
  <div className="flex flex-col gap-4">
    <DatePicker className="w-72">
      <DatePickerLabel>Date (input)</DatePickerLabel>
      <DatePickerInput placeholder="Select a date" />
      <DatePickerCalendar />
    </DatePicker>
    <DatePicker className="w-72">
      <DatePickerLabel>Date (button)</DatePickerLabel>
      <DatePickerInput variant="button" placeholder="Select a date" />
      <DatePickerCalendar />
    </DatePicker>
  </div>
);

export default DatePickerSingle;
