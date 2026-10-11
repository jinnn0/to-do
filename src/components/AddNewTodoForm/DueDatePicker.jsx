import { useId, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/style.css';
import { addDays, format, isSameDay, startOfToday } from 'date-fns';
import { FiCalendar } from 'react-icons/fi';
import { Field, FieldHeader, Label, Options, Pill, CalendarBox, TimeField } from './style';

const quickDates = [
  { label: 'Today', days: 0 },
  { label: 'Tomorrow', days: 1 },
  { label: 'Next week', days: 7 }
];

// Moves a date-time to another day, keeping its time of day.
function onDay(dateTime, day) {
  const moved = new Date(day);
  moved.setHours(dateTime.getHours(), dateTime.getMinutes(), 0, 0);
  return moved;
}

// When the task is due: quick choices, a calendar for other days, and a time.
function DueDatePicker({ value, onChange }) {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const labelId = useId();
  const today = startOfToday();
  const quickDate = quickDates.find(({ days }) => isSameDay(value, addDays(today, days)));

  const chooseDay = (day) => {
    onChange(onDay(value, day));
    setIsCalendarOpen(false);
  };

  const chooseTime = (e) => {
    const [hours, minutes] = e.target.value.split(':').map(Number);
    if (Number.isNaN(hours) || Number.isNaN(minutes)) return;
    const changed = new Date(value);
    changed.setHours(hours, minutes, 0, 0);
    onChange(changed);
  };

  return (
    <Field>
      <FieldHeader>
        <Label id={labelId}>Due</Label>
        <TimeField>
          <input type="time" aria-label="Due time" value={format(value, 'HH:mm')} onChange={chooseTime} required />
        </TimeField>
      </FieldHeader>
      <Options role="group" aria-labelledby={labelId}>
        {quickDates.map(({ label, days }) => (
          <Pill
            key={label}
            type="button"
            aria-pressed={quickDate?.days === days}
            $selected={quickDate?.days === days}
            onClick={() => chooseDay(addDays(today, days))}
          >
            {label}
          </Pill>
        ))}
        <Pill
          type="button"
          aria-expanded={isCalendarOpen}
          $selected={!quickDate}
          onClick={() => setIsCalendarOpen((open) => !open)}
        >
          <FiCalendar aria-hidden="true" />
          {quickDate ? 'Pick a date' : format(value, 'EEE d MMM')}
        </Pill>
      </Options>

      {isCalendarOpen && (
        <CalendarBox>
          <DayPicker
            mode="single"
            required
            selected={value}
            onSelect={chooseDay}
            defaultMonth={value}
            disabled={{ before: today }}
            showOutsideDays
          />
        </CalendarBox>
      )}
    </Field>
  );
}

export default DueDatePicker;
