import styled from 'styled-components';

const MonthlyHeaderContainer = styled.header`
  height: var(--header-height);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 34.06px; /* (header-height (120px) - flex-1 height(51.88px) /2) */
  margin-bottom: 1.8em;
`;

const Row1 = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 100%;

  @media (min-width: 550px) {
    flex-basis: auto;
    margin-right: 3rem;
  }
`;

const Row1_1 = styled.div`
  margin-right: 0;

  .title {
    margin-right: 1rem;
    width: 110px; /* to prevent moving when switching to different month */
    font-size: 1.6rem;

    @media (min-width: 550px) {
      width: 167.38px;
    }

    @media (min-width: 900px) {
      font-size: 2rem;
    }
  }
`;

const Row1_2 = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
  font-size: 1.2rem;
  width: 41px;

  // arrow icons
  svg {
    cursor: pointer;
  }
`;

const Row1_3 = styled.div`
  margin-left: auto;
`;

const Row2Col2 = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  flex-basis: 50%;
  order: 1;
  justify-content: flex-end;

  @media (min-width: 550px) {
    order: 0;
    margin-left: auto;
    flex-basis: auto;
  }

  .add-new-todo-icon {
    font-size: 1.5em;
    stroke-width: 1px;
    cursor: pointer;
  }
`;

const Row2Col1 = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 50%;
  justify-content: flex-start;
  font-size: 0.75em;

  @media (min-width: 550px) {
    flex-basis: 100%;
  }

  .today-btn {
    margin-left: 2.5em;
    background-color: transparent;
    padding: 0.15em 0.5em 0.15em 0.5em;
    border-radius: 8px;
    border: 1px solid rgba(0, 0, 0, 0.253);
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`;

export { MonthlyHeaderContainer, Row1, Row1_1, Row1_2, Row1_3, Row2Col2, Row2Col1 };
