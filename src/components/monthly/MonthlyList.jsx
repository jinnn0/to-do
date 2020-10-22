import React, { useContext } from 'react';
import OuterList from './OuterList';
import { AiOutlineSearch } from 'react-icons/ai';
import _ from 'lodash';
import { GlobalContext } from '../../contexts/GlobalState';

function MonthlyList({ currentMonthName, selectedYear, selectedMonth }) {
  const { todoList } = useContext(GlobalContext);

  const todosByYear = _.groupBy(todoList, 'dateInfo.year');
  const todosThisYear = todosByYear[`${selectedYear}`] || [];
  const todoThisMonth = todosThisYear.filter((todo) => todo.dateInfo.month === selectedMonth);

  const todosEachDay = Object.values(
    todoThisMonth.reduce((acc, current) => {
      if (acc[current.dateInfo.date]) {
        acc[current.dateInfo.date].push(current);
      } else {
        acc[current.dateInfo.date] = [current];
      }
      return acc;
    }, {})
  );

  //or
  //   const todosByDate = _.groupBy(todoThisMonth, 'dateInfo.date');
  //   let todosEachDay = [];
  //   for (let x in todosByDate) {
  //     todosEachDay.push(todosByDate[x]);
  //   }

  return (
    <div className="monthly-list">
      <form action="" onClick={(e) => e.preventDefault()}>
        <AiOutlineSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </form>

      <h2 className="title">
        {currentMonthName}
        <span className="todos-length">({todoThisMonth.length})</span>
      </h2>

      <ul className="outer-ul">
        {todosEachDay.map((eachDay) => (
          <OuterList key={eachDay[0].id} eachDay={eachDay} />
        ))}
      </ul>
    </div>
  );
}

export default MonthlyList;
