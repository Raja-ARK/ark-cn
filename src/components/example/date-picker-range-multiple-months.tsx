import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const DatePickerRangeMultipleMonths = () => (
  <div className="flex flex-col gap-4">
    <DatePicker selectionMode="range" className="w-64" numOfMonths={2}>
      <DatePickerLabel>Date (2 months)</DatePickerLabel>
      <DatePickerInput variant="button" placeholder="Select a date" />
      <DatePickerCalendar />
    </DatePicker>
    <DatePicker selectionMode="range" className="w-64" numOfMonths={3}>
      <DatePickerLabel>Date (3 months)</DatePickerLabel>
      <DatePickerInput variant="button" placeholder="Select a date" />
      <DatePickerCalendar />
    </DatePicker>
  </div>
);

export default DatePickerRangeMultipleMonths;
