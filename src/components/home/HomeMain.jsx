import React, { useContext } from "react";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow-back.svg";
import { ReactComponent as ArrowNext } from "../../assets/icons/arrow-next.svg";
import { GlobalContext } from "../../contexts/GlobalState";

function HomeMain() {
  const { todoList } = useContext(GlobalContext);

  return (
    <div className="home-main-container flex center">
      <div className="home-main flex center">
        <h1 className="title">Focus on this now</h1>
        <div className="todo-item lg flex v-center">
          <span className="type-bar"></span>
          <span className="checkbox"></span>
          <span className="task">{todoList[0].task}</span>
        </div>
        <div className="arrows flex">
          <span className="arrow arrow-back">
            <ArrowBack />
          </span>
          <span className="arrow arrow-next">
            <ArrowNext />
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeMain;
