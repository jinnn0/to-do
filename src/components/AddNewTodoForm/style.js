import styled, { css, keyframes } from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

const accent = colors.purple;
const text = '#1c1c1e';
const muted = '#8e8e93';
const hairline = 'rgba(0, 0, 0, 0.08)';
const sheetBreakpoint = '550px';

const appear = keyframes`
  from { opacity: 0; transform: translateY(-4px) scale(0.98); }
  to { opacity: 1; transform: none; }
`;

const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: none; }
`;

// Dims the page behind the form when it's a bottom sheet on small screens.
const Backdrop = styled.div`
  display: none;

  @media (max-width: ${sheetBreakpoint}) {
    display: block;
    position: fixed;
    inset: 0;
    z-index: 19;
    background: rgba(0, 0, 0, 0.25);
  }
`;

const Card = styled.form`
  width: 408px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 18px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 16px;
  box-shadow: 0 16px 40px rgba(20, 20, 43, 0.12), 0 2px 8px rgba(20, 20, 43, 0.06);
  text-align: left;
  font-size: 14px;
  color: ${text};
  z-index: 20;

  ${(p) =>
    p.$placement === 'center'
      ? css`
          position: absolute;
          top: 50%;
          left: 50%;
          translate: -50% -50%;
        `
      : css`
          position: absolute;
          top: calc(100% + 10px);
          right: 0;
          transform-origin: top right;
          animation: ${appear} 0.16s ease-out;
        `}

  @media (max-width: ${sheetBreakpoint}) {
    position: fixed;
    inset: auto 0 0 0;
    width: auto;
    max-height: 90vh;
    overflow-y: auto;
    translate: none;
    padding: 20px 20px calc(20px + env(safe-area-inset-bottom));
    border-radius: 20px 20px 0 0;
    animation: ${slideUp} 0.22s ease-out;
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const TaskInput = styled.input`
  width: 100%;
  padding: 2px 0 12px;
  border: 0;
  border-bottom: 1px solid ${hairline};
  outline: none;
  background: transparent;
  font: inherit;
  font-size: 16px; /* 16px keeps iOS from zooming in on focus */
  font-weight: 600;
  color: ${text};

  &::placeholder {
    color: #b4b4bb;
    font-weight: 500;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

// A field's label, with an optional control at the right end.
const FieldHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 30px;
`;

const Label = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: ${muted};
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

// A rounded choice button. $color tints it when selected (tags); otherwise the accent is used.
const Pill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 11px;
  border: 1px solid ${hairline};
  border-radius: 999px;
  background: white;
  font: inherit;
  font-size: 13px;
  color: #3a3a3c;
  cursor: pointer;
  transition: background-color 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    background: #f5f5f7;
  }

  &:focus-visible {
    outline: 2px solid ${accent};
    outline-offset: 2px;
  }

  svg {
    font-size: 13px;
  }

  ${(p) =>
    p.$selected &&
    css`
      border-color: ${p.$color ?? accent};
      background: color-mix(in srgb, ${p.$color ?? accent} 14%, white);
      color: ${p.$color ? text : accent};

      &:hover {
        background: color-mix(in srgb, ${p.$color ?? accent} 20%, white);
      }
    `}
`;

const Dot = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(p) => p.$color};
`;

// Styles react-day-picker to match the app.
const CalendarBox = styled.div`
  display: flex;
  justify-content: center;
  padding: 6px 4px 8px;
  border-radius: 12px;
  background: #fafafa;

  .rdp-root {
    --rdp-accent-color: ${accent};
    --rdp-accent-background-color: color-mix(in srgb, ${accent} 12%, white);
    --rdp-day-height: 36px;
    --rdp-day-width: 36px;
    --rdp-day_button-height: 32px;
    --rdp-day_button-width: 32px;
    --rdp-day_button-border-radius: 50%;
    --rdp-selected-border: 0;
    --rdp-today-color: ${accent};
    --rdp-nav-height: 36px;
    --rdp-nav_button-height: 28px;
    --rdp-nav_button-width: 28px;
    --rdp-disabled-opacity: 0.3;
    --rdp-outside-opacity: 0.35;
    font-size: 13px;
  }

  .rdp-month_caption {
    padding-left: 8px;
    font-size: 14px;
    font-weight: 600;
  }

  .rdp-weekday {
    font-size: 11px;
    font-weight: 500;
    color: ${muted};
  }

  .rdp-chevron {
    fill: ${muted};
    width: 14px;
  }

  .rdp-today:not(.rdp-selected) .rdp-day_button {
    font-weight: 700;
  }

  .rdp-selected .rdp-day_button {
    background: ${accent};
    color: white;
    font-weight: 600;
  }

  .rdp-day_button:hover:not([disabled]) {
    background: color-mix(in srgb, ${accent} 12%, white);
  }

  .rdp-selected .rdp-day_button:hover {
    background: ${accent};
  }
`;

const TimeField = styled.label`
  display: inline-flex;
  align-items: center;
  height: 30px;
  padding: 0 6px 0 10px;
  border: 1px solid ${hairline};
  border-radius: 10px;
  color: ${muted};
  cursor: text;

  &:focus-within {
    border-color: ${accent};
  }

  input {
    border: 0;
    outline: none;
    background: transparent;
    font: inherit;
    font-size: 13px;
    color: ${text};
  }

  input::-webkit-calendar-picker-indicator {
    opacity: 0.45;
    cursor: pointer;
  }
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 2px;
`;

const buttonBase = css`
  height: 36px;
  padding: 0 16px;
  border: 0;
  border-radius: 10px;
  font: inherit;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.15s, opacity 0.15s;

  &:focus-visible {
    outline: 2px solid ${accent};
    outline-offset: 2px;
  }
`;

const CancelButton = styled.button`
  ${buttonBase}
  background: transparent;
  color: #6e6e73;

  &:hover {
    background: #f2f2f7;
  }
`;

const SubmitButton = styled.button`
  ${buttonBase}
  background: ${accent};
  color: white;

  &:hover:not(:disabled) {
    background: #5754f0;
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export {
  Backdrop,
  Card,
  TaskInput,
  Field,
  FieldHeader,
  Label,
  Options,
  Pill,
  Dot,
  CalendarBox,
  TimeField,
  Actions,
  CancelButton,
  SubmitButton
};
