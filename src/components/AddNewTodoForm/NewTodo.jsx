import React from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CgCheck } from 'react-icons/cg';

function NewTodo({
  handleInputChange,
  todo,
  colorBoxClicked,
  defaultColorType,
  handleDefaultSelect,
  handleSelectType
}) {
  const colorTypeList = ['important', 'work', 'study', 'other'];

  return (
    <div className="new-task-box flex v-center">
      <input
        type="text"
        onChange={handleInputChange}
        value={todo.task}
        placeholder="New task"
        className="text-input"
        name="task"
      />

      <div className="select-container">
        <ul className="default-option" onClick={handleDefaultSelect}>
          <li>
            <span className={'color-box ' + defaultColorType}></span>
            <span className="arrow-down">
              <RiArrowDropDownLine />
            </span>
          </li>
        </ul>

        <ul className={'select-ul ' + (colorBoxClicked ? 'show-dropdown' : '')} onClick={handleSelectType}>
          {colorTypeList.map((colorType) => (
            <SelectColorTypeList key={colorType} defaultColorType={defaultColorType} colorType={colorType} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewTodo;

function SelectColorTypeList({ defaultColorType, colorType }) {
  return (
    <li data-color-type={colorType}>
      <span className="checked-icon-container">{defaultColorType === colorType ? <CgCheck /> : null}</span>
      <span className={'color-box ' + colorType}></span>
      <span>{colorType}</span>
    </li>
  );
}
