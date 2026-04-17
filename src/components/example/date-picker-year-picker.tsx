import { type DateValue, parseDate } from "@ark-ui/react/date-picker";
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const format = (date: DateValue) => date.year.toString();

const parse = (string: string | undefined) => {
  if (string === "" || !string) return;
  const year = Number(string);
  if (year < 100) {
    const currentYear = new Date().getFullYear();
    const currentCentury = Math.floor(currentYear / 100) * 100;
    return parseDate(new Date(currentCentury + year, 0));
  }
  return parseDate(new Date(Number(string), 0));
};

const DatePickerMonthYearPicker = () => (
  <div className="flex flex-col gap-4">
    <DatePicker
      className="w-72"
      format={format}
      parse={parse}
      defaultView="year"
      minView="year"
      placeholder="yyyy"
    >
      <DatePickerLabel>Single Year Picker</DatePickerLabel>
      <DatePickerInput placeholder="yyyy" />
      <DatePickerCalendar monthYearSelect />
    </DatePicker>
    <DatePicker
      className="w-72"
      format={format}
      parse={parse}
      defaultView="year"
      minView="year"
      placeholder="yyyy"
      selectionMode="range"
    >
      <DatePickerLabel>Range Year Picker</DatePickerLabel>
      <DatePickerInput placeholder="yyyy" />
      <DatePickerCalendar monthYearSelect />
    </DatePicker>
  </div>
);

export default DatePickerMonthYearPicker;
