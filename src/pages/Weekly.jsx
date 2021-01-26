import React, { useContext } from 'react';
import Header from '../components/Header';
import TodoList from '../components/TodoList';
import { RiPushpin2Line } from 'react-icons/ri';
import { GlobalContext } from '../contexts/GlobalState';

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
    <div className="weekly">
      <div className="main-display container">
        <Header title={'Weekly'} />

        <div className="weekly-list">
          {overdueTodoList.length ? (
            <div className="list sm overdue-list">
              <h2>
                Overdue <RiPushpin2Line className="pin-icon" />
              </h2>

              <TodoList todosToday={sortedOverdueTodoList} isOverdueList />
            </div>
          ) : null}

          {thisWeek.map((eachDay) => (
            <div key={eachDay.dateInfo.date} className="list sm">
              <h2>
                {eachDay.dateInfo.day} <span className="date">{eachDay.dateInfo.date}</span>
                <span className="date-ordinal">{getOrdinalNum(eachDay.dateInfo)}</span>
              </h2>

              <TodoList todosToday={eachDay.todos} />
            </div>
          ))}
        </div>
      </div>

      <div className="side-display"></div>
    </div>
  );
}

export default Weekly;
