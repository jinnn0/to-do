import { useContext } from 'react';
import { FiCheck, FiTrash2 } from 'react-icons/fi';
import { GlobalContext } from '../../contexts/GlobalState';
import { todoTypes } from '../../utils/todo';
import { formatTime, toDate } from '../../utils/date';
import { Item, Check, Body, Task, Meta, When, Tag, Dot, Delete } from './style';

// A task in the month view's list. index staggers the entrance animation down the list.
function MonthlyListSubListItem({ todo, index = 0 }) {
  const { removeTodo, toggleComplete } = useContext(GlobalContext);
  const type = todoTypes.find((t) => t.value === todo.type) ?? todoTypes[0];

  return (
    <Item $compact style={{ '--i': Math.min(index, 12) }}>
      <Check
        type="button"
        role="checkbox"
        aria-checked={todo.completed}
        aria-label={todo.task}
        $color={type.color}
        onClick={() => toggleComplete(todo.id)}
      >
        <FiCheck aria-hidden="true" />
      </Check>
      <Body>
        <Task $completed={todo.completed}>{todo.task}</Task>
        <Meta>
          <When dateTime={toDate(todo.dateInfo).toISOString()}>{formatTime(todo.dateInfo)}</When>
          <Tag>
            <Dot $color={type.color} aria-hidden="true" />
            {type.label}
          </Tag>
        </Meta>
      </Body>
      <Delete type="button" aria-label={`Delete "${todo.task}"`} onClick={() => removeTodo(todo.id)}>
        <FiTrash2 aria-hidden="true" />
      </Delete>
    </Item>
  );
}

export default MonthlyListSubListItem;
