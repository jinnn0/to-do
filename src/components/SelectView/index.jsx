import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../../contexts/GlobalState';
import { View } from './style';

function SelectView() {
  const { selectedView, updateSelectedView } = useContext(GlobalContext);
  const navigate = useNavigate();
  const location = useLocation();

  // navigate : change the page and url
  const handleSelectedViewChange = (e) => {
    navigate(`/${e.target.value}`);
    updateSelectedView(e.target.value);
  };

  // when mounted, get the current url and always update the selectedView
  // it updates the state when user clicks on go back button in the browser
  useEffect(() => {
    const currentView = location.pathname.slice(1, location.pathname.length);
    updateSelectedView(currentView);
  });

  return (
    <View value={selectedView} onChange={handleSelectedViewChange}>
      <option value="daily">Day</option>
      <option value="weekly">Week</option>
      <option value="monthly">Month</option>
    </View>
  );
}

export default SelectView;
