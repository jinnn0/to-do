import shortid from 'shortid';
import { colors } from '../styles/GlobalStyle';

// Tags a task can have, in the order they're offered and sorted.
export const todoTypes = [
  { value: 'important', label: 'Important', color: colors.purple },
  { value: 'work', label: 'Work', color: colors.blue },
  { value: 'study', label: 'Study', color: colors.pink },
  { value: 'other', label: 'Other', color: colors.orange }
];

// Builds a task in the shape the rest of the app stores and reads.
export function createTodo({ task, type, due }) {
  return {
    id: shortid.generate(),
    task: task.trim(),
    timestamp: due.getTime(),
    type,
    completed: false,
    dateInfo: {
      year: due.getFullYear(),
      month: due.getMonth(),
      date: due.getDate(),
      day: due.toLocaleString('default', { weekday: 'long' }),
      hour: due.getHours(),
      minute: due.getMinutes()
    }
  };
}
