import styled from 'styled-components';
import { Card } from '../../styles/shared';

const CalendarContainer = styled(Card)`
  padding: 14px 12px 12px;
  align-self: start;
`;

const Weekdays = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 6px;
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-3);
`;

const Days = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  row-gap: 2px;
`;

export { CalendarContainer, Weekdays, Days };
