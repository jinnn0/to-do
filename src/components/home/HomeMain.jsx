import React, { useContext, useEffect } from 'react';
import AddNewTodoForm from '../shared/AddNewTodoForm';
import TodoItem from '../shared/TodoItem';
import * as MdIcons from 'react-icons/md';
import { FaRegHandPointDown } from 'react-icons/fa';
import homeAnimation from '../../animations/homeAnimation';
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
          className={'home-main flex center ' + (addNewTodoButtonClicked ? 'z-index' : '')}
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
              <InitialMessage handleClickAddNewTodoButton={handleClickAddNewTodoButton} />
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

function InitialMessage({ handleClickAddNewTodoButton }) {
  useEffect(() => {
    homeAnimation();
  }, []);

  return (
    <div className="initial-message">
      <FaRegHandPointDown className="point-up-icon" />
      <h1 className="title message" onClick={handleClickAddNewTodoButton}>
        What's your todo today?
      </h1>
    </div>
  );
}
