import React, { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalState";

function SelectSort() {
  const { sortValue, updateSortValue } = useContext(GlobalContext);
  const handleSelectedSortChange = (e) => {
    updateSortValue(e.target.value);
  };

  return (
    <div>
      <span className="sort-by-text">sort by</span>
      <select
        className="select-sort"
        value={sortValue}
        onChange={handleSelectedSortChange}
      >
        <option value="recent">Recently added</option>
        <option value="tag">By tag</option>
        <option value="oldest">By oldest</option>
        <option value="completed">By completed</option>
        <option value="active">By active</option>
      </select>
    </div>
  );
}

export default SelectSort;
