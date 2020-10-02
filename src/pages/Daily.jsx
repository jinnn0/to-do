import React, { useContext } from 'react';
import useUnmount from '../utils/useUnmount';
import TodoList from '../components/shared/TodoList.jsx';
import HeaderShared from '../components/shared/HeaderShared';
import { GlobalContext } from '../contexts/GlobalState';

function Daily() {
  const { today, handleClickOutsideForm } = useContext(GlobalContext);

  useUnmount();

  return (
    <div className="daily" onClick={handleClickOutsideForm}>
      <div className="main-display container">
        <HeaderShared title={'Today'} />
        <TodoList today={today} size="md" />
      </div>
      <div className="side-display"></div>
    </div>
  );
}

export default Daily;
