import React, { useContext } from "react";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import PopupForm from "./PopupForm";
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
        <Add onClick={handleClickAddButton} />
        <PopupForm />
      </div>
    </div>
  );
}

export default HeaderShared;
