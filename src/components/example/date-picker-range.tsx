import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const DatePickerRangeInput = () => (
  <div className="flex flex-col gap-4">
    <DatePicker selectionMode="range" className="w-72">
      <DatePickerLabel>Date (input)</DatePickerLabel>
      <DatePickerInput placeholder="Select a date" />
      <DatePickerCalendar />
    </DatePicker>
    <DatePicker selectionMode="range" className="w-72">
      <DatePickerLabel>Date (button)</DatePickerLabel>
      <DatePickerInput variant="button" placeholder="Select a date" />
      <DatePickerCalendar />
    </DatePicker>
  </div>
);

export default DatePickerRangeInput;
