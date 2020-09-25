import React, { useState } from "react";
import { ReactComponent as ArrowBack } from "../../assets/icons/arrow-back.svg";
import { ReactComponent as ArrowNext } from "../../assets/icons/arrow-next.svg";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import SelectView from "../shared/SelectView";
import PopupForm from "../shared/PopupForm.jsx";

function HeaderMonthly({
  currentMonthName,
  selectedYear,
  moveToPrevMonth,
  moveToNextMonth
}) {
  const [addButtonClicked, setAddButtonClicked] = useState(false);

  return (
    <div className="header calendar">
      <div className="header__col-1 col">
        <h1 className="title">
          <span>{currentMonthName}</span>
        </h1>
        <div className="arrows flex">
          <span className="arrow arrow-back">
            <ArrowBack onClick={moveToPrevMonth} />
          </span>
          <span className="arrow arrow-next">
            <ArrowNext onClick={moveToNextMonth} />
          </span>
        </div>
      </div>

      <div className="header__col-2 col">
        <SelectView />
      </div>

      <div className="header__col-3 col">
        <Add onClick={() => setAddButtonClicked(!addButtonClicked)} />
        <PopupForm
          addButtonClicked={addButtonClicked}
          setAddButtonClicked={setAddButtonClicked}
        />
      </div>

      <div className="row-2">
        <span className="this-year">{selectedYear}</span>
      </div>
    </div>
  );
}

export default HeaderMonthly;
