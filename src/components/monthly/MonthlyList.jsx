import React, { useContext } from 'react';
import OuterList from './OuterList';
import { AiOutlineSearch } from 'react-icons/ai';
import _ from 'lodash';
import { GlobalContext } from '../../contexts/GlobalState';

function MonthlyList({ currentMonthName, selectedYear, selectedMonth }) {
  const { todoList } = useContext(GlobalContext);

  const sortedByDateOrder = todoList.sort((a, b) => {
    const dateA = new Date(a.dateInfo.year, a.dateInfo.month, a.dateInfo.date);
    const dateB = new Date(b.dateInfo.year, b.dateInfo.month, b.dateInfo.date);
    return dateA - dateB;
  });
  const todosByYear = _.groupBy(sortedByDateOrder, 'dateInfo.year');
  const todoThisMonth = todosByYear[`${selectedYear}`].filter(
    (todo) => todo.dateInfo.month === selectedMonth
  );
  const todosByDate = _.groupBy(todoThisMonth, 'dateInfo.date');

  let todosByDateArray = [];
  for (let x in todosByDate) {
    todosByDateArray.push(todosByDate[x]);
  }

  return (
    <div className="monthly-list">
      <form action="">
        <AiOutlineSearch className="search-icon" />
        <input type="text" placeholder="Search" />
      </form>

      <h2 className="title">
        {currentMonthName}
        <span className="todos-length">({todoThisMonth.length})</span>
      </h2>

      <ul className="outer-ul">
        {todosByDateArray.map((eachDay) => (
          <OuterList key={eachDay[0].id} eachDay={eachDay} />
        ))}
      </ul>
    </div>
  );
}

export default MonthlyList;
