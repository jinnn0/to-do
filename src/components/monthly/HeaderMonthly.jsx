import React, { useContext } from "react";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import SelectView from "../shared/SelectView";
import AddNewTodoForm from "../shared/AddNewTodoForm.jsx";
import * as MdIcons from "react-icons/md";
import { GlobalContext } from "../../contexts/GlobalState";

function HeaderMonthly({
  currentMonthName,
  selectedYear,
  moveToPrevMonth,
  moveToNextMonth
}) {
  const { handleClickAddButton } = useContext(GlobalContext);

  return (
    <div className="header">
      <div className="row-1">
        <div className="row-1__1">
          <h1 className="title">{currentMonthName}</h1>
        </div>

        <div className="row-1__2 arrows">
          <MdIcons.MdKeyboardArrowLeft
            className="arrow arrow-back"
            onClick={moveToPrevMonth}
          />
          <MdIcons.MdKeyboardArrowRight
            className="arrow arrow-next"
            onClick={moveToNextMonth}
          />
        </div>

        <div className="row-1__3">
          <SelectView />
        </div>
      </div>

      <div className="row-2-col-2">
        <Add onClick={handleClickAddButton} />
        <AddNewTodoForm />
      </div>

      <div className="row-2-col-1">
        <span className="this-year">{selectedYear}</span>
      </div>
    </div>
  );
}

export default HeaderMonthly;
