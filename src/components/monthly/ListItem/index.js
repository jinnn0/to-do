import React, { useContext } from 'react';
import { CgTrash } from 'react-icons/cg';
import { AiOutlineMore } from 'react-icons/ai';
import { GlobalContext } from '../../../contexts/GlobalState';
import {ListItemContainer, Col1, Col2, Checkbox, Task, More} from './style'

function ListItem({ todo }) {
  const { toggleComplete, removeTodo } = useContext(GlobalContext);

  return (
    <ListItemContainer className=" todo-item">
      <Col1>
        <Checkbox
          className={`${todo.type} ${todo.completed ? 'completed ' : ''}`}
          onClick={() => toggleComplete(todo.id)}
        ></Checkbox>
      </Col1>

      <Col2>
        <Task className={`${todo.completed ? 'grey-out' : ''}`}>{todo.task}</Task>
        <More>
          <CgTrash onClick={() => removeTodo(todo.id)} />
          <AiOutlineMore />
        </More>
      </Col2>
    </ListItemContainer>
  );
}

export default ListItem;
