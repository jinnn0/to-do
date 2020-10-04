import React, { useContext } from 'react';
import AddNewTodoForm from '../shared/AddNewTodoForm';
import * as MdIcons from 'react-icons/md';
import TodoItem from '../shared/TodoItem';
import { GlobalContext } from '../../contexts/GlobalState';

function HomeMain() {
  const {
    today,
    todoList,
    addNewTodoButtonClicked,
    handleClickAddNewTodoButton,
    handleClickOutsideForm,
    homeMainDivRef,
    homeMainDivTouching
  } = useContext(GlobalContext);

  const focusOnThisTodo = todoList.filter(
    (todo) =>
      todo.dateInfo.year === today.year &&
      todo.dateInfo.month === today.month &&
      todo.dateInfo.date === today.date
  )[0];

  const absoluteCenter = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  return (
    <>
      <div className="home-main-container">
        <div
          className="home-main flex center"
          ref={homeMainDivRef}
          style={homeMainDivTouching ? null : absoluteCenter}
        >
          {focusOnThisTodo ? (
            <>
              <h1 className="title">Focus on this now</h1>
              <TodoItem key={focusOnThisTodo.id} todo={focusOnThisTodo} size="lg" />
              <div className="arrows flex">
                <MdIcons.MdKeyboardArrowLeft className="arrow arrow-back" />
                <MdIcons.MdKeyboardArrowRight className="arrow arrow-next" />
              </div>
            </>
          ) : (
            <>
              <h1 className="title center" onClick={handleClickAddNewTodoButton}>
                What's your todo today?
              </h1>
              {addNewTodoButtonClicked ? (
                <>
                  <AddNewTodoForm />
                </>
              ) : null}
            </>
          )}
        </div>
      </div>

      {addNewTodoButtonClicked && !focusOnThisTodo ? (
        <div className="overlay" onClick={handleClickOutsideForm}></div>
      ) : null}
    </>
  );
}

export default HomeMain;
