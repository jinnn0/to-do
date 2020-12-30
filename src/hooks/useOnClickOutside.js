/*
Used in :
  monthly/CalendarDate
  shared/AddNewTodoForm
  todo-form/NewTodo
*/

import React from 'react';

export default function useOnClickOutside(ref, handler) {
  React.useEffect(() => {
    const listener = (e) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      handler(e);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}