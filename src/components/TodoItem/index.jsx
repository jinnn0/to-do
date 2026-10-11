import React, { useContext, useEffect } from 'react';
import todoListAnimation from '../../animations/todoListAnimation';
import { CgTrash } from 'react-icons/cg';
import { AiOutlineMore } from 'react-icons/ai';
import { GlobalContext } from '../../contexts/GlobalState';
import { TodoItemContainer, TypeBar, Checkbox, Task, More } from './style';

function TodoItem({ todo }) {
  const { removeTodo, toggleComplete } = useContext(GlobalContext);

  useEffect(() => {
    todoListAnimation();
  }, [todo]);

  return (
    <TodoItemContainer className="todo-item">
      <div>
        <TypeBar className={`${todo.type}`}></TypeBar>
      </div>
      <div>
        <Checkbox
          className={`${todo.completed ? 'completed ' + todo.type : ''}`}
          onClick={() => toggleComplete(todo.id)}
        ></Checkbox>
      </div>
      <div>
        <Task>{todo.task}</Task>
      </div>
      <More>
        <CgTrash onClick={() => removeTodo(todo.id)} />
        <AiOutlineMore />
      </More>
    </TodoItemContainer>
  );
}

export default TodoItem;
