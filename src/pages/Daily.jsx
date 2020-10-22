import React, { useContext } from 'react';
import TodoList from '../components/shared/TodoList.jsx';
import HeaderShared from '../components/shared/HeaderShared';
import { RiPushpin2Line } from 'react-icons/ri';
import { GlobalContext } from '../contexts/GlobalState';

function Daily() {
  const { sortedTodosToday, overdueTodoList, sortedOverdueTodoList } = useContext(GlobalContext);

  return (
    <div className="daily">
      <div className="main-display container">
        <HeaderShared title={'Today'} />
        {overdueTodoList.length ? (
          <div className="list md overdue-list">
            <h2>
              Overdue <RiPushpin2Line className="pin-icon" />
            </h2>
            <TodoList todosToday={sortedOverdueTodoList} isOverdueList />
          </div>
        ) : null}
        <div className="list md">
          <TodoList todosToday={sortedTodosToday} />
        </div>
      </div>
      <div className="side-display"></div>
    </div>
  );
}

export default Daily;
