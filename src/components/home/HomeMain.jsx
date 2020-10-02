import React, { useState, useContext } from 'react';
import AddNewTodoForm from '../shared/AddNewTodoForm';
import * as MdIcons from 'react-icons/md';
import TodoItem from '../shared/TodoItem';
import { GlobalContext } from '../../contexts/GlobalState';

function HomeMain() {
  const { todoList, today } = useContext(GlobalContext);
  const [isTextClicked, setIsTextClicked] = useState(false);

  const focusOnThisTodo = todoList.filter(
    (todo) =>
      todo.dateInfo.year === today.year &&
      todo.dateInfo.month === today.month &&
      todo.dateInfo.date === today.date
  )[0];

  const showAddNewTodoform = () => {
    setIsTextClicked(!isTextClicked);
  };

  const closeAddNewTodoForm = () => {
    setIsTextClicked(!isTextClicked);
  };

  return (
    <>
      <div className="home-main-container flex center">
        <div className="home-main flex center">
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
              <h1 className="title center" onClick={showAddNewTodoform}>
                What's your todo today?
              </h1>
              {isTextClicked ? (
                <>
                  <AddNewTodoForm />
                </>
              ) : null}
            </>
          )}
        </div>
      </div>

      {isTextClicked && !focusOnThisTodo ? (
        <div className="overlay" onClick={closeAddNewTodoForm}></div>
      ) : null}
    </>
  );
}

export default HomeMain;
