import React, { useContext } from 'react';
import Header from '../../components/Header';
import TodoList from '../../components/TodoList';
import { RiPushpin2Line } from 'react-icons/ri';
import { GlobalContext } from '../../contexts/GlobalState';
import { MainContainer, Main, Side, ListWrapper } from '../../styles/shared';
import { WeeklyList, ListHeading } from './style';

function Weekly() {
  const { today, sortedTodoList, overdueTodoList, sortedOverdueTodoList } = useContext(GlobalContext);

  const generateTodos = (todos, counter) => {
    return todos.filter(
      (todo) =>
        todo.dateInfo.year === today.year &&
        todo.dateInfo.month === today.month &&
        todo.dateInfo.date === today.date + counter
    );
  };

  let thisWeek = [];
  for (let i = 0; i < 7; i++) {
    const nextDayConstructor = new Date(today.year, today.month, today.date + i);

    const eachDay = {
      dateInfo: {
        year: nextDayConstructor.getFullYear(),
        month: nextDayConstructor.getMonth(),
        date: nextDayConstructor.getDate(),
        day: nextDayConstructor.toLocaleString('default', { weekday: 'long' })
      },
      todos: generateTodos(sortedTodoList, i)
    };

    thisWeek.push(eachDay);
  }

  thisWeek[0].dateInfo.day = 'Today';
  thisWeek[1].dateInfo.day = 'Tomorrow';

  const getOrdinalNum = function (eachDay) {
    if (eachDay.dateInfo > 3 && eachDay.dateInfo < 21) return 'th';
    switch (eachDay.dateInfo % 10) {
      case 1:
        return 'st';
      case 2:
        return 'nd';
      case 3:
        return 'rd';
      default:
        return 'th';
    }
  };

  return (
    <MainContainer className="weekly">
      <Main>
        <Header title={'Weekly'} />

        <WeeklyList>
          {overdueTodoList.length ? (
            <ListWrapper sm overdue>
              <ListHeading>
                Overdue <RiPushpin2Line />
              </ListHeading>

              <TodoList todosToday={sortedOverdueTodoList} isOverdueList />
            </ListWrapper>
          ) : null}

          {thisWeek.map((eachDay) => (
            <ListWrapper key={eachDay.dateInfo.date} sm>
              <ListHeading>
                {eachDay.dateInfo.day} <span className="date">{eachDay.dateInfo.date}</span>
                <span className="date-ordinal">{getOrdinalNum(eachDay.dateInfo)}</span>
              </ListHeading>

              <TodoList todosToday={eachDay.todos} />
            </ListWrapper>
          ))}
        </WeeklyList>
      </Main>

      <Side></Side>
    </MainContainer>
  );
}

export default Weekly;
