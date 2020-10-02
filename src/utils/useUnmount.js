import { useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

function useUnmount() {
  const { addNewTodoButtonClicked, handleClickOutsideForm } = useContext(GlobalContext);

  useEffect(() => {
    return () => {
      handleClickOutsideForm();
    };
  }, [addNewTodoButtonClicked]);
}

export default useUnmount;
