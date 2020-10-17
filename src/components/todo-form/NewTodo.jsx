import React, { useEffect, useRef } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CgCheck } from 'react-icons/cg';

function NewTodo({
  handleInputChange,
  todo,
  isColorBoxClicked,
  selectTypeColor,
  showSelectTypeColorDropDown,
  handleSelectType
}) {
  const selectTypeColorList = ['important', 'work', 'study', 'other'];
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="new-task-box flex v-center">
      <input
        ref={inputRef}
        type="text"
        onChange={handleInputChange}
        value={todo.task}
        placeholder="New task"
        className="text-input"
      />

      <div className="select-type-container">
        <ul className="select-type-default-ul" onClick={showSelectTypeColorDropDown}>
          <li>
            <span className={`color-box ${selectTypeColor}`}></span>
            <span className="arrow-down">
              <RiArrowDropDownLine />
            </span>
          </li>
        </ul>

        <ul
          className={`select-type-dropdown-ul ${isColorBoxClicked ? 'show-dropdown' : ''}`}
          onClick={handleSelectType}
        >
          {selectTypeColorList.map((colorType) => (
            <SelectColorTypeList key={colorType} selectTypeColor={selectTypeColor} colorType={colorType} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewTodo;

function SelectColorTypeList({ selectTypeColor, colorType }) {
  return (
    <li data-color-type={colorType}>
      <span className="checked-icon-container">{selectTypeColor === colorType ? <CgCheck /> : null}</span>
      <span className={'color-box ' + colorType}></span>
      <span>{colorType}</span>
    </li>
  );
}
