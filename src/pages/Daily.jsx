import React, { useContext } from "react";
import TodoList from "../components/shared/TodoList.jsx";
import HeaderShared from "../components/shared/HeaderShared";
import { GlobalContext } from "../contexts/GlobalState";

function Daily() {
  const { today } = useContext(GlobalContext);
  const { handleClickOutsideAddButton } = useContext(GlobalContext);

  return (
    <div className="daily" onClick={handleClickOutsideAddButton}>
      <div className="main-display container">
        <HeaderShared title={"Today"} />
        <TodoList today={today} size="md" />
      </div>
      <div className="side-display"></div>
    </div>
  );
}

export default Daily;
