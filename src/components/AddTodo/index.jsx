import { useContext, useRef } from 'react';
import { FiPlus } from 'react-icons/fi';
import AddNewTodoForm from '../AddNewTodoForm';
import { GlobalContext } from '../../contexts/GlobalState';
import { Anchor, TriggerButton } from './style';

// The + button in the page headers and the new-task form it opens below it.
function AddTodo() {
  const { isAddTodoOpen, toggleAddTodo } = useContext(GlobalContext);
  const anchorRef = useRef();

  return (
    <Anchor ref={anchorRef}>
      <TriggerButton type="button" aria-label="Add task" aria-expanded={isAddTodoOpen} onClick={toggleAddTodo}>
        <FiPlus className="add-new-todo-icon" aria-hidden="true" />
      </TriggerButton>
      {isAddTodoOpen && <AddNewTodoForm containerRef={anchorRef} />}
    </Anchor>
  );
}

export default AddTodo;
