import React, { useContext } from "react";
import { FiPlus } from "react-icons/fi";

import AddNewTodoForm from "./AddNewTodoForm";
import SelectView from "./SelectView";
import SelectSort from "./SelectSort";
import { GlobalContext } from "../../contexts/GlobalState";

function HeaderShared({ title }) {
  const { handleClickAddButton } = useContext(GlobalContext);

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
        <FiPlus className="add-icon" onClick={handleClickAddButton} />
        <AddNewTodoForm />
      </div>
    </div>
  );
}

export default HeaderShared;
