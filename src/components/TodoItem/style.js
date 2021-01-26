import styled from 'styled-components';
import { colors } from '../../GlobalStyle';

const TodoItemContainer = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.7rem 1.1rem;
  border-radius: 30px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.058);
  box-shadow: 0 2px 10px 2px rgba(0, 0, 0, 0.03);
  transform: translateY(30px); /* animation */
  font-size: 16px;
  opacity: 0;
`;

const Background = styled.span`
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

const TypeBar = styled(Background)`
  display: block;
  width: 0.3em;
  height: 1em;
  border-radius: 0.31em;
  margin-right: 0.5em;
  background-color: ${colors.purple};
`;

const Checkbox = styled(Background)`
  display: block;
  border: 1px solid #c1c3c6;
  width: 0.9em;
  height: 0.9em;
  border-radius: 0.35em;
  margin-right: 0.5em;
  cursor: pointer;
  transition: background-color 0.05s linear;

  &.completed {
    background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22M13.613%2027.068l-7.94-7.28q-.285-.267-.442-.613t-.172-.7.11-.71.394-.638q.52-.583%201.3-.614T8.225%2017l6.13%205.626%208.79-17q.363-.693%201.104-.93t1.433.118.93%201.103-.126%201.442L16.56%2026.55q-.204.394-.558.654t-.78.34q-.063.015-.118.023t-.11.008-.102%200q-.74%200-1.276-.504z%22%20fill%3D%22%23FFF%22/%3E%3C/svg%3E');
    border: none;
    background-size: 0.625em; /* default */
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

const Task = styled.span`
  font-size: 0.73em;
  font-weight: 600;
  word-break: break-all;
`;

const More = styled.div`
  margin-left: auto;
  display: flex;
  cursor: pointer;

  /* bin / more icons */
  svg {
    margin: 0 1rem;
    color: rgba(0, 0, 0, 0.699);
  }

  svg:hover {
    color: $purple;
    transition: background-color 0.08s ease-in-out;
  }

  svg:last-child {
    margin: 0;
  }
`;

export { TodoItemContainer, TypeBar, Checkbox, Task, More };
