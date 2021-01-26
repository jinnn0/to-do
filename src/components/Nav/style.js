import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';

const NavContainer = styled.nav`
  width: 100%;
  height: var(--nav-height);
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  padding: 0 var(--container-padding);
  background-color: white;
`;

const NavList = styled.ul`
  display: flex;
  height: 100%;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 100%;
    position: relative;
    overflow: hidden;
    cursor: pointer;

    &:last-child {
      margin-right: 0;
    }
    &.selected::before {
      content: '';
      position: absolute;
      top: 0;
      width: 60%;
      height: 3px;
      background-color: ${colors.purple};
      transition: all 0.3s ease-in-out;
    }
  }

  svg {
    color: black;
    font-size: 1.1rem;
  }
`;

export { NavContainer, NavList };
