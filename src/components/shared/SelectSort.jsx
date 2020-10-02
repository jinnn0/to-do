import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';

function SelectSort() {
  const { sortValue, updateSortValue } = useContext(GlobalContext);
  const handleSelectedSortChange = (e) => {
    updateSortValue(e.target.value);
  };

  return (
    <div className="select-sort-container">
      <span className="sort-by-text">sort by</span>
      <select className="select-sort" value={sortValue} onChange={handleSelectedSortChange}>
        <option value="recent">recent</option>
        <option value="tag">tag</option>
        <option value="oldest">oldest</option>
        <option value="completed">completed</option>
        <option value="active">active</option>
      </select>
    </div>
  );
}

export default SelectSort;
