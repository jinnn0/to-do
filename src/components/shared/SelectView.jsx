import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalState";

function SelectView({ history }) {
  const { selectedView, updateSelectedView } = useContext(GlobalContext);

  const handleSelectedViewChange = (e) => {
    history.push(`/${e.target.value}`);
    updateSelectedView(e.target.value);
  };

  return (
    <select
      className="select-view"
      value={selectedView}
      onChange={handleSelectedViewChange}
    >
      <option value="daily">Day</option>
      <option value="weekly">Week</option>
      <option value="monthly">Month</option>
    </select>
  );
}

export default withRouter(SelectView);
