// Helpers for the dateInfo stored on each task ({ year, month, date, day, hour, minute }).

export const isOnDay = (dateInfo, day) =>
  dateInfo.year === day.getFullYear() && dateInfo.month === day.getMonth() && dateInfo.date === day.getDate();

export const toDate = (dateInfo) => new Date(dateInfo.year, dateInfo.month, dateInfo.date, dateInfo.hour ?? 0, dateInfo.minute ?? 0);

export const formatTime = (dateInfo) =>
  `${String(dateInfo.hour ?? 0).padStart(2, '0')}:${String(dateInfo.minute ?? 0).padStart(2, '0')}`;

export const formatShortDate = (date) => date.toLocaleDateString('default', { weekday: 'short', day: 'numeric', month: 'short' });

export const formatLongDate = (date) => date.toLocaleDateString('default', { weekday: 'long', day: 'numeric', month: 'long' });

export const addDays = (date, days) => new Date(date.getFullYear(), date.getMonth(), date.getDate() + days);

export const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());
