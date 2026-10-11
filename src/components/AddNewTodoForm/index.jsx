import { useContext, useEffect, useRef, useState } from 'react';
import TagPicker from './TagPicker';
import DueDatePicker from './DueDatePicker';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { GlobalContext } from '../../contexts/GlobalState';
import { createTodo } from '../../utils/todo';
import { Backdrop, Card, TaskInput, Actions, CancelButton, SubmitButton } from './style';

// The new-task form. placement is 'popover' (under the + button in a header) or 'center'
// (over the Home page message). On narrow screens it becomes a bottom sheet either way.
// Clicks inside containerRef (e.g. the + button that opened it) don't count as outside.
function AddNewTodoForm({ placement = 'popover', containerRef }) {
  const { addTodo, closeAddTodo } = useContext(GlobalContext);
  const [task, setTask] = useState('');
  const [type, setType] = useState('important');
  const [due, setDue] = useState(() => new Date());
  const formRef = useRef();

  useOnClickOutside(containerRef ?? formRef, closeAddTodo);

  // Escape closes the form wherever focus is.
  useEffect(() => {
    const onKeyDown = (e) => e.key === 'Escape' && closeAddTodo();
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [closeAddTodo]);

  const canSubmit = task.trim().length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    addTodo(createTodo({ task, type, due }));
    closeAddTodo();
  };

  return (
    <>
      {placement === 'popover' && <Backdrop aria-hidden="true" onClick={closeAddTodo} />}
      <Card ref={formRef} $placement={placement} onSubmit={handleSubmit} aria-label="New task">
        <TaskInput
          autoFocus
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="What needs to be done?"
          aria-label="Task"
          maxLength={120}
        />
        <TagPicker value={type} onChange={setType} />
        <DueDatePicker value={due} onChange={setDue} />
        <Actions>
          <CancelButton type="button" onClick={closeAddTodo}>
            Cancel
          </CancelButton>
          <SubmitButton type="submit" disabled={!canSubmit}>
            Add task
          </SubmitButton>
        </Actions>
      </Card>
    </>
  );
}

export default AddNewTodoForm;
