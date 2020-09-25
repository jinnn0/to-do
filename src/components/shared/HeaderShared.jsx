import React, { useState } from "react";
import { ReactComponent as Add } from "../../assets/icons/add.svg";
import PopupForm from "./PopupForm";
import SelectView from "./SelectView";
import SelectSort from "./SelectSort";

function HeaderShared({ title }) {
  const [addButtonClicked, setAddButtonClicked] = useState(false);

  return (
    <div className="header">
      <div className="header__col-1 col">
        <h1 className="content-title">{title}</h1>
        <SelectView />
      </div>
      <div className="header__col-2 col">
        <SelectSort />
      </div>
      <div className="header__col-3 col">
        <Add onClick={() => setAddButtonClicked(!addButtonClicked)} />
        <PopupForm
          addButtonClicked={addButtonClicked}
          setAddButtonClicked={setAddButtonClicked}
        />
      </div>
    </div>
  );
}

export default HeaderShared;
