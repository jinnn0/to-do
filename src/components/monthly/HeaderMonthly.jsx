import React, { useState, useContext } from "react";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import SelectView from "../shared/SelectView";
import PopupForm from "../shared/PopupForm.jsx";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import { GlobalContext } from "../../contexts/GlobalState";

function HeaderMonthly({
  currentMonthName,
  selectedYear,
  moveToPrevMonth,
  moveToNextMonth,
}) {
  const { handleClickAddButton } = useContext(GlobalContext);

  return (
    <div className="header">
      <div className="row-1">
        <div className="row-1__1">
          <h1 className="title">{currentMonthName}</h1>
        </div>

        <div className="row-1__2 arrows">
          <MdKeyboardArrowLeft
            className="arrow arrow-back"
            onClick={moveToPrevMonth}
          />
          <MdKeyboardArrowRight
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
        <PopupForm />
      </div>

      <div className="row-2-col-1">
        <span className="this-year">{selectedYear}</span>
      </div>
    </div>
  );
}

export default HeaderMonthly;
