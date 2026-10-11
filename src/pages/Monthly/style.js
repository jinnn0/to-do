import styled from 'styled-components';

const CalendarWrapper = styled.div`
  display: grid;
  gap: 20px;

  @media (min-width: 1000px) {
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr);
    align-items: start;
  }
`;

export { CalendarWrapper };
