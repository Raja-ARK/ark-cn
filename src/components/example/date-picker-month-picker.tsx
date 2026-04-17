import type { DateValue } from "@ark-ui/react/date-picker";
import { CalendarDate } from "@internationalized/date";
import {
  DatePicker,
  DatePickerCalendar,
  DatePickerInput,
  DatePickerLabel,
} from "@/components/ui/date-picker";

const formatMonth = (date: DateValue) => {
  const month = date.month.toString().padStart(2, "0");
  return `${month}`;
};

const parseMonth = (string: string) => {
  const fullRegex = /^(\d{1,2})\/(\d{4})$/;
  const fullMatch = string.match(fullRegex);
  if (fullMatch) {
    const [_, month, year] = fullMatch.map(Number);
    return new CalendarDate(year, month, 1);
  }
};

const formatMonthYear = (date: DateValue) => {
  const month = date.month.toString().padStart(2, "0");
  const year = date.year.toString();
  return `${month}/${year}`;
};

const parseMonthYear = (string: string) => {
  const fullRegex = /^(\d{1,2})\/(\d{4})$/;
  const fullMatch = string.match(fullRegex);
  if (fullMatch) {
    const [_, month, year] = fullMatch.map(Number);
    return new CalendarDate(year, month, 1);
  }
};

const DatePickerMonthPicker = () => (
  <div className="flex flex-col gap-4">
    <DatePicker
      className="w-72"
      placeholder="mm"
      defaultView="month"
      minView="month"
      maxView="month"
      format={formatMonth}
      parse={parseMonth}
      selectionMode="single"
    >
      <DatePickerLabel>Single Month Picker</DatePickerLabel>
      <DatePickerInput placeholder="mm" />
      <DatePickerCalendar monthYearSelect viewTriggerTextOnly />
    </DatePicker>
    <DatePicker
      className="w-72"
      placeholder="mm"
      defaultView="month"
      minView="month"
      maxView="month"
      format={formatMonth}
      parse={parseMonth}
      selectionMode="range"
    >
      <DatePickerLabel>Range Month Picker</DatePickerLabel>
      <DatePickerInput placeholder="mm" />
      <DatePickerCalendar monthYearSelect viewTriggerTextOnly />
    </DatePicker>
    <DatePicker
      className="w-72"
      placeholder="mm/yyyy"
      defaultView="month"
      minView="month"
      format={formatMonthYear}
      parse={parseMonthYear}
      selectionMode="single"
    >
      <DatePickerLabel>Single Month Year Picker</DatePickerLabel>
      <DatePickerInput placeholder="mm/yyyy" />
      <DatePickerCalendar monthYearSelect />
    </DatePicker>
    <DatePicker
      className="w-72"
      placeholder="mm/yyyy"
      defaultView="month"
      minView="month"
      format={formatMonthYear}
      parse={parseMonthYear}
      selectionMode="range"
    >
      <DatePickerLabel>Range Month Year Picker</DatePickerLabel>
      <DatePickerInput placeholder="mm/yyyy" />
      <DatePickerCalendar monthYearSelect />
    </DatePicker>
  </div>
);

export default DatePickerMonthPicker;
