import React, { useContext, useState, useEffect, useRef } from 'react';
import { mod } from '../../utils/utils';
import AddNewTodoForm from '../shared/AddNewTodoForm';
import TodoItem from '../shared/TodoItem';
import * as MdIcons from 'react-icons/md';
import { FaRegHandPointDown } from 'react-icons/fa';
import homeAnimation from '../../animations/homeAnimation';
import { GlobalContext } from '../../contexts/GlobalState';

function HomeMain() {
  const { today, todoList, isAddNewTodoClicked, toggleIsAddNewTodoClicked } = useContext(GlobalContext);

  const [todoIndex, setTodoIndex] = useState(0);
  const homeMainDivRef = useRef();
  const [homeMainDivTouching, setHomeMainDivTouching] = useState(false);

  const todoToday = todoList.filter(
    (todo) =>
      todo.dateInfo.year === today.year &&
      todo.dateInfo.month === today.month &&
      todo.dateInfo.date === today.date
  );
  const focusOnThisTodo = todoToday[todoIndex];

  const getPrevTodo = () => {
    setTodoIndex((prev) => mod(prev - 1, todoToday.length));
  };

  const getNextTodo = () => {
    setTodoIndex((prev) => (prev + 1) % todoToday.length);
  };

  const absoluteCenter = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  };

  useEffect(() => {
    if (homeMainDivRef.current) {
      const currentTop = homeMainDivRef.current.getBoundingClientRect().top;
      // nav-height-bg 72px + time-display 50px = 130
      // set the div to display block so that
      // it stays below time display when shrinking small
      if (currentTop < 130) {
        setHomeMainDivTouching(true);
        if (window.innerHeight > 544) {
          setHomeMainDivTouching(false);
        }
      }
    }
  }, []);

  return (
    <>
      <div className="home-main-container">
        <div
          className={`home-main flex center ${isAddNewTodoClicked ? 'z-index' : ''}`}
          ref={homeMainDivRef}
          style={homeMainDivTouching ? null : absoluteCenter}
        >
          {focusOnThisTodo ? (
            <>
              <h1 className="title">Focus on this now</h1>
              <TodoItem key={focusOnThisTodo.id} todo={focusOnThisTodo} />
              <div className="arrows flex">
                <MdIcons.MdKeyboardArrowLeft className="arrow arrow-back" onClick={getPrevTodo} />
                <MdIcons.MdKeyboardArrowRight className="arrow arrow-next" onClick={getNextTodo} />
              </div>
            </>
          ) : (
            <>
              <InitialMessage showAddNewTodoForm={toggleIsAddNewTodoClicked} />
              {isAddNewTodoClicked ? (
                <>
                  <AddNewTodoForm />
                </>
              ) : null}
            </>
          )}
        </div>
      </div>

      {isAddNewTodoClicked && !focusOnThisTodo ? <div className="overlay"></div> : null}
    </>
  );
}

export default HomeMain;

function InitialMessage({ showAddNewTodoForm }) {
  useEffect(() => {
    homeAnimation();
  }, []);

  return (
    <div className="initial-message">
      <FaRegHandPointDown className="point-down-icon" />
      <h1 className="title message" onClick={showAddNewTodoForm}>
        What's your todo today?
      </h1>
    </div>
  );
}
