import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const DatePickerPreset = () => (
  <div className="flex flex-col gap-4">
    <DatePicker className="w-72">
      <DatePickerLabel>Date</DatePickerLabel>
      <DatePickerInput placeholder="Select a date" />
      <DatePickerCalendar enablePresets />
    </DatePicker>
    <DatePicker selectionMode="range" className="w-72">
      <DatePickerLabel>Date</DatePickerLabel>
      <DatePickerInput />
      <DatePickerCalendar enablePresets />
    </DatePicker>
  </div>
);

export default DatePickerPreset;
