import { useEffect, useContext } from 'react';
import { GlobalContext } from '../contexts/GlobalState';

function useUnmount() {
  const { handleClickOutsideForm } = useContext(GlobalContext);

  useEffect(() => {
    return () => {
      handleClickOutsideForm();
    };
  });
}

export default useUnmount;
