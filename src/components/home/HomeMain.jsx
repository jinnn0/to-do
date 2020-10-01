import React, { useContext } from "react";
import * as MdIcons from "react-icons/md";
import TodoItem from "../shared/TodoItem";
import { GlobalContext } from "../../contexts/GlobalState";

function HomeMain() {
  const { todoList, today } = useContext(GlobalContext);

  const FocusOnThisTodo = todoList.filter(
    (todo) =>
      todo.dateInfo.year === today.year &&
      todo.dateInfo.month === today.month &&
      todo.dateInfo.date === today.date
  )[0];

  return (
    <div className="home-main-container flex center">
      <div className="home-main flex center">
        <h1 className="title">Focus on this now</h1>
        <TodoItem key={FocusOnThisTodo.id} todo={FocusOnThisTodo} size="lg" />
        <div className="arrows flex">
          <MdIcons.MdKeyboardArrowLeft className="arrow arrow-back" />
          <MdIcons.MdKeyboardArrowRight className="arrow arrow-next" />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
