import styled from 'styled-components';

const CalendarWrapper = styled.div`
  padding: 0 0.5em;
  height: 1100px;
  max-width: 1300px;
  display: flex;
  flex-direction: column;

  @media (min-width: 1100px) {
    height: 60vh;
    flex-direction: row;
    padding: 0;
  }

  @media (min-width: 1100px) and (max-height: 750px) {
    min-height: 450px; /* prevents from 60vh in short landscape mode */
    margin-bottom: 5em;
  }
`;

export { CalendarWrapper };
