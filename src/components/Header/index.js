import React, { useContext } from 'react';
import SelectView from '../SelectView';
import SelectSort from '../SelectSort';
import AddNewTodoForm from '../AddNewTodoForm';
import { FiPlus } from 'react-icons/fi';
import { GlobalContext } from '../../contexts/GlobalState';
import { HeaderContainer, Row1, Row1_1, Row2Col1, Row2Col2 } from './style';

function Header({ title }) {
  const { isAddNewTodoClicked, toggleIsAddNewTodoClicked } = useContext(GlobalContext);

  return (
    <HeaderContainer>
      <Row1>
        <Row1_1>
          <h1 className="title">{title}</h1>
        </Row1_1>

        <div>
          <SelectView />
        </div>
      </Row1>

      <Row2Col1>
        <SelectSort />
      </Row2Col1>

      <Row2Col2>
        <FiPlus className="add-new-todo-icon" onClick={toggleIsAddNewTodoClicked} />
        {isAddNewTodoClicked ? <AddNewTodoForm /> : null}
      </Row2Col2>
    </HeaderContainer>
  );
}

export default Header;
