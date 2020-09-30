import React, { useContext } from "react";
import { ReactComponent as More } from "../../assets/icons/more.svg";
import { ReactComponent as Bin } from "../../assets/icons/bin.svg";
import { GlobalContext } from "../../contexts/GlobalState";

function TodoItem({ todo, weekly }) {
  const { removeTodo, toggleComplete } = useContext(GlobalContext);

  let typeBar;
  let checkBoxColor;
  if (todo.type === "important") {
    typeBar = "#6966ff";
    checkBoxColor = "#6966ff";
  } else if (todo.type === "work") {
    typeBar = "#75cdff";
    checkBoxColor = "#75cdff";
  } else if (todo.type === "study") {
    typeBar = "#ffb8c0";
    checkBoxColor = "#ffb8c0";
  } else if (todo.type === "other") {
    typeBar = "#ffaf75";
    checkBoxColor = "#ffaf75";
  }

  const typeBarColor = {
    backgroundColor: typeBar
  };

  const checkBoxCompleted = {
    backgroundColor: todo.completed ? checkBoxColor : ""
  };

  return (
    <li className={"todo-item flex v-center" + (weekly ? " sm" : " md")}>
      <div>
        <span className="type-bar" style={typeBarColor}></span>
      </div>
      <div>
        <span
          className={"checkbox" + (todo.completed ? " completed" : "")}
          style={checkBoxCompleted}
          onClick={() => toggleComplete(todo.id)}
        ></span>
      </div>
      <div>
        <span className="task">{todo.task}</span>
      </div>
      <div className="more">
        <Bin className="bin" onClick={() => removeTodo(todo.id)} />
        <More />
      </div>
    </li>
  );
}

export default TodoItem;
