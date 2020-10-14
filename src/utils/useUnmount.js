import { useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

function useUnmount() {
  const { hideAddNewTodoForm } = useContext(GlobalContext);

  useEffect(() => {
    return () => {
      hideAddNewTodoForm();
    };
  });
}

export default useUnmount;
