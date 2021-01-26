import React, { useContext } from 'react';
import { GlobalContext } from '../../contexts/GlobalState';
import { SelectSortContainer, SortByText, Sort } from './style';

function SelectSort() {
  const { selectedSort, updateSelectedSort } = useContext(GlobalContext);
  const handleSelectedSortChange = (e) => {
    updateSelectedSort(e.target.value);
  };

  return (
    <SelectSortContainer>
      <SortByText>sort by</SortByText>
      <Sort value={selectedSort} onChange={handleSelectedSortChange}>
        <option value="oldest">oldest</option>
        <option value="newest">newest</option>
        <option value="tag">tag</option>
        <option value="completed">completed</option>
        <option value="active">active</option>
      </Sort>
    </SelectSortContainer>
  );
}

export default SelectSort;
