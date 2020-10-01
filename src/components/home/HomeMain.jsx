import React, { useContext } from "react";
import * as MdIcons from "react-icons/md";

// import { ReactComponent as ArrowBack } from "../../assets/icons/arrow-back.svg";
// import { ReactComponent as ArrowNext } from "../../assets/icons/arrow-next.svg";
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
        <div className="todo-item lg flex v-center">
          <span className="type-bar"></span>
          <span className="checkbox"></span>
          {/* <span className="task">{FocusOnThisTodo.task}</span> */}
        </div>
        <div className="arrows flex">
          <MdIcons.MdKeyboardArrowLeft className="arrow arrow-back" />
          <MdIcons.MdKeyboardArrowRight className="arrow arrow-next" />
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
