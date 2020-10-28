import { useState, useEffect } from 'react';
import { useSort, useTodoList } from './firebaseHooks';

// used in GlobalContext.js
const useSortedTodoList = () => {
  const todoList = useTodoList();
  const selectedSort = useSort();
  const [sortedTodoList, setSortedTodoList] = useState(todoList);

  useEffect(() => {
    let updated;
    if (selectedSort === 'oldest') {
      updated = todoList.sort((a, b) => {
        return a.timestamp - b.timestamp;
      });
    } else if (selectedSort === 'newest') {
      updated = todoList.sort((a, b) => {
        return b.timestamp - a.timestamp;
      });
    } else if (selectedSort === 'tag') {
      const ordering = {};
      const sortOrder = ['important', 'work', 'study', 'other'];
      for (let i = 0; i < sortOrder.length; i++) {
        ordering[sortOrder[i]] = i;
      }
      updated = todoList.sort((a, b) => {
        return ordering[a.type] - ordering[b.type];
      });
    } else if (selectedSort === 'completed') {
      updated = todoList.filter((todo) => todo.completed);
    } else if (selectedSort === 'active') {
      updated = todoList.filter((todo) => !todo.completed);
    }
    setSortedTodoList(updated);
  }, [todoList, selectedSort]);

  return sortedTodoList;
};

export default useSortedTodoList;
