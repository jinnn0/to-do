import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

const AddNewTodoFormContainer = styled.form`
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  right: 45px;
  padding: 10px 25px 10px 25px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  outline: none;
  z-index: 2; /* otherwise it will be placed underneath todo item */
  display: none;

  &.show-add-new-todo-form {
    display: flex;
  }

  &:before {
    content: '';
    display: block;
    width: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: -15px;
    border-color: rgba(0, 0, 0, 0) ${colors.formBg};
    border-style: solid;
    border-width: 15px;
    border-right-width: 0;
  }
`;

const SubmitButton = styled.button`
  margin-top: auto;
  background-color: white;
  border: 1px solid #c6c5ff;
  border-radius: 3px;
  padding: 0.5rem 0;
  color: $purple;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #7472ff;
    border: none;
    color: white;
  }
`;

export { AddNewTodoFormContainer, SubmitButton };
