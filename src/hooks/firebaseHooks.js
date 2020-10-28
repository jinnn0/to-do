import { useState, useEffect } from 'react';
import { db } from '../firebase/firebase';

// used in GlobalContext.js - useTodoList, useSort
const useTodoList = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const unSubscribe = db.collection('todo-list').onSnapshot((snap) => {
      const documents = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      setTodoList(documents);
    });

    return () => unSubscribe();
  }, []);

  return todoList;
};

const useSort = () => {
  const [selectedSort, setSelectedSort] = useState('oldest');

  useEffect(() => {
    const unSubscribe = db.collection('selected-sort').onSnapshot((snap) => {
      setSelectedSort(snap.docs[0].data().sort);
    });

    return () => unSubscribe();
  }, []);

  return selectedSort;
};
export { useTodoList, useSort };
