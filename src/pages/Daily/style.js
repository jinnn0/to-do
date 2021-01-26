import styled from 'styled-components';

const Heading = styled.h2`
  font-size: 1em;
  margin-bottom: 2.3rem;

  @media (min-width: 900px) {
    font-size: 1.5em;
    margin-bottom: 3rem;
  }
`;

const NoTodoMessage = styled.span`
  display: block;
  padding-bottom: 1rem;
  padding-left: 1em;
  color: rgba(0, 0, 0, 0.24);
`;

export { Heading, NoTodoMessage };
