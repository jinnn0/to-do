import React, { useContext } from 'react';
import { CgTrash } from 'react-icons/cg';
import { AiOutlineMore } from 'react-icons/ai';
import { GlobalContext } from '../../contexts/GlobalState';

function InnerList({ todo }) {
  const { toggleComplete, removeTodo } = useContext(GlobalContext);

  return (
    <li className="inner-ul__list todo-item flex v-center">
      <div className="col-1">
        <span
          className={`checkbox ${todo.type} ${todo.completed ? 'completed ' : ''}`}
          onClick={() => toggleComplete(todo.id)}
        ></span>
      </div>
      <div className="col-2">
        <span className={`task ${todo.completed ? 'grey-out' : ''}`}>{todo.task}</span>
        <div className="more">
          <CgTrash onClick={() => removeTodo(todo.id)} />
          <AiOutlineMore />
        </div>
      </div>
    </li>
  );
}

export default InnerList;
