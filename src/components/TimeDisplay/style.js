import styled from 'styled-components';

const TimeDisplayContainer = styled.div`
  height: var(--time-display-height);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1rem;
  position: relative;
  z-index: 2;
`;

const Time = styled.div`
  margin-right: 15px;
`;

const Day = styled.div`
  color: rgba(0, 0, 0, 0.289);
  font-weight: 200;

  .date {
    margin-left: 5px;
  }
`;

export { TimeDisplayContainer, Time, Day };
