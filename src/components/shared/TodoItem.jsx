import React, { useContext } from "react";
import { ReactComponent as More } from "../../assets/icons/more.svg";
import { ReactComponent as Bin } from "../../assets/icons/bin.svg";
import { GlobalContext } from "../../contexts/GlobalState";

function TodoItem({ todo, weekly }) {
  const { removeTodo, toggleComplete } = useContext(GlobalContext);

  let typeBar;
  if (todo.type === "blue") {
    typeBar = "blue";
  } else if (todo.type === "pink") {
    typeBar = "pink";
  } else if (todo.type === "orange") {
    typeBar = "orange";
  }

  let checkBoxColor;
  if (todo.type === "blue") {
    checkBoxColor = "#75cdff";
  } else if (todo.type === "purple") {
    checkBoxColor = "#6966ff";
  } else if (todo.type === "pink") {
    checkBoxColor = "#ffb8c0";
  } else if (todo.type === "orange") {
    checkBoxColor = "#ffaf75";
  }

  const checkBoxCompleted = {
    backgroundColor: todo.completed ? checkBoxColor : "",
  };

  return (
    <li className={"todo-item flex v-center" + (weekly ? " sm" : " md")}>
      <div>
        <span className={"type-bar " + typeBar}></span>
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
