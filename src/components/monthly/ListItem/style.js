import styled from 'styled-components';

const ListItemContainer = styled.li`
    font-size: 16px;
    display: flex;
    align-items: center;
    opacity: 1;
    border: none;
    border-radius: 30px;
    box-shadow: none;
    background-color: transparent;
    margin-bottom: 1rem;
    padding: 0.7rem 1.1rem 0.7rem 0.1rem;

    @media (min-width: 1550px) {
        font-size: 1.1em;
    }
`

const Col1 = styled.div`
  flex-basis: 13%;
`

const Col2 = styled.div`
  flex-basis: 87%;
  display: flex;
`

const Checkbox = styled.span`
    border: none;
    width: 0.9em;
    height: 0.9em;
    border-radius: 0.35em;
    margin-right: 0.5em;
    cursor: pointer;
    transition: background-color 0.05s linear;

    &.completed {
      background-color: $purple;
      background-image: url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%3E%3Cpath%20d%3D%22M13.613%2027.068l-7.94-7.28q-.285-.267-.442-.613t-.172-.7.11-.71.394-.638q.52-.583%201.3-.614T8.225%2017l6.13%205.626%208.79-17q.363-.693%201.104-.93t1.433.118.93%201.103-.126%201.442L16.56%2026.55q-.204.394-.558.654t-.78.34q-.063.015-.118.023t-.11.008-.102%200q-.74%200-1.276-.504z%22%20fill%3D%22%23FFF%22/%3E%3C/svg%3E');
      border: none;
      background-size: 0.625em; 
      background-repeat: no-repeat;
      background-position: center center;
  }
`

const Task = styled.span`
    font-size: 0.73em;
    font-weight: 600;
    word-break: break-all;

    &.grey-out {
      color: rgba(0, 0, 0, 0.461);
    }
`

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
`

export {ListItemContainer, Col1, Col2, Checkbox, Task, More}