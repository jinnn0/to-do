import styled from 'styled-components';

const HomeContainer = styled.main`
  height: calc(var(--mobile-100vh-fix) - var(--nav-height));
  margin-top: var(--nav-height);
  padding: 0 var(--container-padding);
  background-color: white;
`;

export { HomeContainer };
