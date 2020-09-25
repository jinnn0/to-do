import React, { useContext, useEffect } from "react";
import todoListAnimation from "../../animations/todoListAnimation";
import TodoItem from "./TodoItem.jsx";
import { GlobalContext } from "../../contexts/GlobalState";

function TodoList({ today, weekly }) {
  const { sortedTodoList } = useContext(GlobalContext);

  const todoForToday = sortedTodoList.filter((todo) => {
    return (
      todo.dateInfo.year === today.year &&
      todo.dateInfo.month === today.month &&
      todo.dateInfo.date === today.date
    );
  });

  useEffect(() => {
    todoListAnimation();
  }, [sortedTodoList]);

  return (
    <ul className={"todo-list" + (weekly ? " sm" : " md")}>
      {weekly ? <h2>{today.day}</h2> : ""}
      {todoForToday.map((todo) => (
        <TodoItem key={todo.id} todo={todo} weekly={weekly} />
      ))}
    </ul>
  );
}

export default TodoList;
