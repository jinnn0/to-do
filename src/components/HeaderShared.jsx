import React, { useContext } from 'react';
import SelectView from './SelectView';
import SelectSort from './SelectSort';
import AddNewTodoForm from './AddNewTodoForm';
import { FiPlus } from 'react-icons/fi';
import { GlobalContext } from '../contexts/GlobalState';

function HeaderShared({ title }) {
  const { isAddNewTodoClicked, toggleIsAddNewTodoClicked } = useContext(GlobalContext);

  return (
    <div className="header">
      <div className="row-1">
        <div className="row-1__1">
          <h1 className="title">{title}</h1>
        </div>

        <div className="row-1__2">
          <SelectView />
        </div>
      </div>

      <div className="row-2-col-1">
        <SelectSort />
      </div>

      <div className="row-2-col-2">
        <FiPlus className="add-new-todo-icon" onClick={toggleIsAddNewTodoClicked} />
        {isAddNewTodoClicked ? <AddNewTodoForm /> : null}
      </div>
    </div>
  );
}

export default HeaderShared;
