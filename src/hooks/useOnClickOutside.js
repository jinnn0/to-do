import { useEffect, useRef } from 'react';

// Calls handler when the pointer goes down outside the element in ref.
// Used by CalendarDate and AddNewTodoForm.
export default function useOnClickOutside(ref, handler) {
  // Keep the latest handler without re-subscribing on every render.
  const handlerRef = useRef(handler);
  useEffect(() => {
    handlerRef.current = handler;
  });

  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handlerRef.current(e);
    };

    document.addEventListener('pointerdown', listener);
    return () => document.removeEventListener('pointerdown', listener);
  }, [ref]);
}
