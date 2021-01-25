import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

const NewTodoContainer = styled.div`
  display: flex;
  align-items: center;
  height: 30%;
  justify-content: space-between;
  margin-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.089);
`;

const Input = styled.input`
  height: 100%;
  width: 100%;
  margin-right: 1rem;
  border: none;
  background-color: transparent;
  text-indent: 3px;
  outline: none;

  &::placeholder {
    font-size: 1rem;
  }
`;

const SelectType = styled.div`
  width: 43px;
  width: 63px;
  height: 20px;
  position: relative;
  border: 1px solid rgba(0, 0, 0, 0.247);
  border-radius: 3px;
  z-index: 10;
`;

const DefaultType = styled.ul`
  padding-left: 5px;
`;

const Color = styled.span`
  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 3px;
  margin-right: 3px;

  &.important {
    background-color: ${colors.purple};
  }

  &.work {
    background-color: ${colors.blue};
  }

  &.study {
    background-color: ${colors.pink};
  }

  &.other {
    background-color: ${colors.orange};
  }
`;

const DropDown = styled.ul`
  width: 130px;
  position: absolute;
  top: -100%;
  left: -20px;
  background: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.062);
  display: none;

  @media (min-width: 750px) {
    left: 50px;
  }

  &.show-dropdown {
    display: block;
  }
`;

const TypeItem = styled.li`
  width: 100%;
  height: 24px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  background-color: white;
  cursor: pointer;

  &:hover {
    background: #00000009;
  }

  span {
    pointer-events: none;
  }
`;

const CheckedIcon = styled.span`
  display: inline-block;
  width: 30px;
  text-align: center;
`;

export { NewTodoContainer, Input, SelectType, DefaultType, Color, DropDown, TypeItem, CheckedIcon };
