import React, { useContext, useEffect } from 'react';
import todoListAnimation from '../../animations/todoListAnimation';
import { CgTrash } from 'react-icons/cg';
import { AiOutlineMore } from 'react-icons/ai';
import { GlobalContext } from '../../contexts/GlobalState';

function TodoItem({ todo }) {
  const { removeTodo, toggleComplete } = useContext(GlobalContext);

  useEffect(() => {
    todoListAnimation();
  }, [todo]);

  return (
    <li className="todo-item flex v-center">
      <div>
        <span className={`type-bar ${todo.type}`}></span>
      </div>
      <div>
        <span
          className={`checkbox ${todo.completed ? 'completed ' + todo.type : ''}`}
          onClick={() => toggleComplete(todo)}
        ></span>
      </div>
      <div>
        <span className="task">{todo.task}</span>
      </div>
      <div className="more">
        <CgTrash onClick={() => removeTodo(todo.id)} />
        <AiOutlineMore />
      </div>
    </li>
  );
}

export default TodoItem;
