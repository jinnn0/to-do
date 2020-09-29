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

  const getOrdinalNum = function (today) {
    if (today.date > 3 && today.date < 21) return "th";
    switch (today.date % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  for (let i = 0; i < 31; i++) {
    // console.log("hello ", i, "->", i % 10)
  }

  return (
    <ul className={"todo-list" + (weekly ? " sm" : "")}>
      {weekly ? (
        <h2>
          {today.day} <span className="date">{today.date}</span>
          <span className="date-ordinal">{getOrdinalNum(today)}</span>{" "}
        </h2>
      ) : (
        ""
      )}
      {todoForToday.map((todo, index) => (
        <TodoItem key={index} todo={todo} weekly={weekly} />
      ))}
    </ul>
  );
}

export default TodoList;
