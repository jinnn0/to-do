import React, { useContext } from "react";
import TodoItem from "./TodoItem.jsx";
import { GlobalContext } from "../../contexts/GlobalState";

function TodoList({ today, size }) {
  const { sortedTodoList } = useContext(GlobalContext);

  const todoForToday = sortedTodoList.filter((todo) => {
    return (
      todo.dateInfo.year === today.year &&
      todo.dateInfo.month === today.month &&
      todo.dateInfo.date === today.date
    );
  });

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

  return (
    <ul className={"todo-list " + size}>
      {size === "sm" ? (
        <h2>
          {today.day} <span className="date">{today.date}</span>
          <span className="date-ordinal">{getOrdinalNum(today)}</span>{" "}
        </h2>
      ) : (
        ""
      )}
      {todoForToday.map((todo, index) => (
        <TodoItem key={index} todo={todo} size={size} />
      ))}
    </ul>
  );
}

export default TodoList;
