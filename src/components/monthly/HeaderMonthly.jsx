import React, { useContext } from 'react';
import SelectView from '../shared/SelectView';
import AddNewTodoForm from '../shared/AddNewTodoForm.jsx';
import * as MdIcons from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { GlobalContext } from '../../contexts/GlobalState';

function HeaderMonthly({ currentMonthName, selectedYear, moveToPrevMonth, moveToNextMonth, goBackToToday }) {
  const { isAddNewTodoClicked, toggleIsAddNewTodoClicked } = useContext(GlobalContext);

  return (
    <div className="header">
      <div className="row-1">
        <div className="row-1__1">
          <h1 className="title">{currentMonthName}</h1>
        </div>

        <div className="row-1__2 arrows">
          <MdIcons.MdKeyboardArrowLeft className="arrow arrow-back" onClick={moveToPrevMonth} />
          <MdIcons.MdKeyboardArrowRight className="arrow arrow-next" onClick={moveToNextMonth} />
        </div>

        <div className="row-1__3">
          <SelectView />
        </div>
      </div>

      <div className="row-2-col-2">
        <FiPlus className="add-new-todo-icon" onClick={toggleIsAddNewTodoClicked} />
        {isAddNewTodoClicked ? <AddNewTodoForm /> : null}
      </div>

      <div className="row-2-col-1">
        <span className="this-year">{selectedYear}</span>
        <button className="today-btn" onClick={goBackToToday}>
          today
        </button>
      </div>
    </div>
  );
}

export default HeaderMonthly;
