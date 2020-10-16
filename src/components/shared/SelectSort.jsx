import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';

function SelectSort() {
  const { selectedSort, updateSelectedSort } = useContext(GlobalContext);
  const handleSelectedSortChange = (e) => {
    updateSelectedSort(e.target.value);
  };

  return (
    <div className="select-sort-container">
      <span className="sort-by-text">sort by</span>
      <select className="select-sort" value={selectedSort} onChange={handleSelectedSortChange}>
        <option value="oldest">oldest</option>
        <option value="newest">newest</option>
        <option value="tag">tag</option>
        <option value="completed">completed</option>
        <option value="active">active</option>
      </select>
    </div>
  );
}

export default SelectSort;
