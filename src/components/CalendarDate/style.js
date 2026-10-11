import styled, { css } from 'styled-components';

const DayNumber = styled.span`
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  transition: background-color 0.15s, color 0.15s;

  @media (min-width: 1000px) {
    width: 38px;
    height: 38px;
  }
`;

const DateButton = styled.button`
  width: 100%;
  min-height: 52px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
  padding: 4px 0;
  border: 0;
  border-radius: 10px;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  color: ${(p) => (!p.$inMonth ? 'var(--text-3)' : p.$weekend ? 'var(--text-2)' : 'var(--text)')};
  opacity: ${(p) => (p.$inMonth ? 1 : 0.55)};

  &:hover ${DayNumber} {
    background: var(--surface-hover);
  }

  ${(p) =>
    p.$today &&
    css`
      ${DayNumber} {
        color: var(--accent-text);
        font-weight: 700;
        box-shadow: inset 0 0 0 1.5px var(--accent);
      }
    `}

  ${(p) =>
    p.$selected &&
    css`
      ${DayNumber}, &:hover ${DayNumber} {
        background: var(--accent);
        color: white;
        box-shadow: none;
      }
    `}
`;

const Dots = styled.span`
  height: 6px;
  display: flex;
  gap: 3px;
`;

const Dot = styled.span`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: ${(p) => p.$color};
`;

export { DateButton, DayNumber, Dots, Dot };
