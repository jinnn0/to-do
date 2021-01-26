import React, { useContext } from 'react';
import SelectView from '../SelectView';
import AddNewTodoForm from '../AddNewTodoForm';
import * as MdIcons from 'react-icons/md';
import { FiPlus } from 'react-icons/fi';
import { GlobalContext } from '../../contexts/GlobalState';
import { MonthlyHeaderContainer, Row1, Row1_1, Row1_2, Row1_3, Row2Col2, Row2Col1 } from './style';

function MonthlyHeader({ currentMonthName, selectedYear, moveToPrevMonth, moveToNextMonth, goBackToToday }) {
  const { isAddNewTodoClicked, toggleIsAddNewTodoClicked } = useContext(GlobalContext);

  return (
    <MonthlyHeaderContainer>
      <Row1>
        <Row1_1>
          <h1 className="title">{currentMonthName}</h1>
        </Row1_1>

        <Row1_2>
          <MdIcons.MdKeyboardArrowLeft onClick={moveToPrevMonth} />
          <MdIcons.MdKeyboardArrowRight onClick={moveToNextMonth} />
        </Row1_2>

        <Row1_3>
          <SelectView />
        </Row1_3>
      </Row1>

      <Row2Col2>
        <FiPlus className="add-new-todo-icon" onClick={toggleIsAddNewTodoClicked} />
        {isAddNewTodoClicked ? <AddNewTodoForm /> : null}
      </Row2Col2>

      <Row2Col1>
        <span className="this-year">{selectedYear}</span>
        <button className="today-btn" onClick={goBackToToday}>
          today
        </button>
      </Row2Col1>
    </MonthlyHeaderContainer>
  );
}

export default MonthlyHeader;
