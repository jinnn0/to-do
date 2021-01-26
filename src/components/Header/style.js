import styled from 'styled-components';

const HeaderContainer = styled.header`
  height: var(--header-height);
  position: relative;
  display: flex;
  flex-wrap: wrap;
  padding-top: 34.06px; /* (header-height (120px) - flex-1 height(51.88px) /2) */
  margin-bottom: 1.8em;

  @media (min-width: 550px) {
    padding-top: 0;
  }
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
  margin-right: 1rem;

  .title {
    margin-right: 1rem;
    font-size: 1.6rem;

    @media (min-width: 900px) {
      font-size: 2rem;
    }
  }
`;

const Row2Col1 = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 50%;

  @media (min-width: 550px) {
    flex-basis: auto;
  }
`;

const Row2Col2 = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 45%;
  justify-content: flex-end;
  margin-left: auto;

  @media (min-width: 550px) {
    flex-basis: auto;
  }

  .add-new-todo-icon {
    font-size: 1.5em;
    stroke-width: 1px;
    cursor: pointer;
  }
`;

export { HeaderContainer, Row1, Row1_1, Row2Col1, Row2Col2 };
