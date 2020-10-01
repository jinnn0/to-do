import React, { useContext, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalState";

function SelectView({ history, location }) {
  const { selectedView, updateSelectedView } = useContext(GlobalContext);

  // history.push : change the page and url
  const handleSelectedViewChange = (e) => {
    history.push(`/${e.target.value}`);
    updateSelectedView(e.target.value);
  };

  // when mounted, get the current url and
  // always update the selectedView
  // it updates the state when user clicks on go back button in the browser
  useEffect(() => {
    const currentView = location.pathname.slice(1, location.pathname.length);
    updateSelectedView(currentView);
  }, []);

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
