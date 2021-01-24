import React, { useEffect, useRef } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { CgCheck } from 'react-icons/cg';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import {
  NewTodoContainer,
  Input,
  SelectType,
  DefaultType,
  Color,
  DropDown,
  TypeItem,
  CheckedIcon
} from './style';

function NewTodo({
  handleInputChange,
  todo,
  isColorBoxClicked,
  setIsColorBoxClicked,
  selectTypeColor,
  showSelectTypeColorDropDown,
  handleSelectType
}) {
  const selectTypeColorList = ['important', 'work', 'study', 'other'];
  const inputRef = useRef();
  const selectTypeDivRef = useRef();

  useEffect(() => {
    // when enabled, it takes away focus every time AddNewTodoForm gets re-render
    // when changing time with arrow key
    // needs fix in the future
    // inputRef.current.focus();
  });

  // hide the dropdown
  useOnClickOutside(selectTypeDivRef, () => setIsColorBoxClicked(false));

  return (
    <NewTodoContainer>
      <Input
        ref={inputRef}
        type="text"
        onChange={handleInputChange}
        value={todo.task}
        placeholder="New task"
      />

      <SelectType ref={selectTypeDivRef}>
        <DefaultType onClick={showSelectTypeColorDropDown}>
          <li>
            <Color className={selectTypeColor}></Color>
            <span>
              <RiArrowDropDownLine />
            </span>
          </li>
        </DefaultType>

        <DropDown className={`${isColorBoxClicked ? 'show-dropdown' : ''}`} onClick={handleSelectType}>
          {selectTypeColorList.map((colorType) => (
            <SelectColorTypeList key={colorType} selectTypeColor={selectTypeColor} colorType={colorType} />
          ))}
        </DropDown>
      </SelectType>
    </NewTodoContainer>
  );
}

export default NewTodo;

function SelectColorTypeList({ selectTypeColor, colorType }) {
  return (
    <TypeItem data-color-type={colorType}>
      <CheckedIcon>{selectTypeColor === colorType ? <CgCheck /> : null}</CheckedIcon>
      <Color className={colorType}></Color>
      <span>{colorType}</span>
    </TypeItem>
  );
}
