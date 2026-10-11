import React, { useContext, useState, useEffect, useRef } from 'react';
import {
  HomeMainContainer,
  HomeMainWrapper,
  Title,
  Arrows,
  InitialMessageContainer,
  Message,
  Overlay
} from './style';
import { mod } from '../../utils/utils';
import AddNewTodoForm from '../AddNewTodoForm';
import TodoItem from '../TodoItem';
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
      <HomeMainContainer>
        <HomeMainWrapper
          className={` ${isAddNewTodoClicked ? 'z-index' : ''}`}
          ref={homeMainDivRef}
          style={homeMainDivTouching ? null : absoluteCenter}
        >
          {focusOnThisTodo ? (
            <>
              <Title>Focus on this now</Title>
              <TodoItem key={focusOnThisTodo.id} todo={focusOnThisTodo} />
              <Arrows>
                <MdIcons.MdKeyboardArrowLeft className="arrow arrow-back" onClick={getPrevTodo} />
                <MdIcons.MdKeyboardArrowRight className="arrow arrow-next" onClick={getNextTodo} />
              </Arrows>
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
        </HomeMainWrapper>
      </HomeMainContainer>

      {isAddNewTodoClicked && !focusOnThisTodo ? <Overlay></Overlay> : null}
    </>
  );
}

export default HomeMain;

function InitialMessage({ showAddNewTodoForm }) {
  useEffect(() => {
    homeAnimation();
  }, []);

  return (
    <InitialMessageContainer onClick={showAddNewTodoForm}>
      <FaRegHandPointDown className="point-down-icon" />
      <Message>What's your todo today?</Message>
    </InitialMessageContainer>
  );
}
