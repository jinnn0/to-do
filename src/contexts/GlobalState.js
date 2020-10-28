import React, { useState, createContext } from 'react';
import { db } from '../firebase/firebase';
import { useTodoList, useSort, useView } from '../hooks/firebaseHooks';
import useSortedTodoList from '../hooks/useSortedTodoList';
// import sampleTodoList from '../utils/sampleTodoList';

// // load sample todos to firestore
// sampleTodoList.forEach((todo) => {
//   db.collection('todo-list').add(todo);
// });

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  // today
  const d = new Date();
  const today = {
    year: d.getFullYear(),
    month: d.getMonth(),
    monthName: d.toLocaleString('default', { month: 'short' }),
    date: d.getDate(),
    day: d.toLocaleString('default', { weekday: 'short' }),
    hour: d.getHours(),
    minute: d.getMinutes()
  };

  const todoList = useTodoList();
  const sortedTodoList = useSortedTodoList();
  const selectedSort = useSort();
  const selectedView = useView();
  const [isAddNewTodoClicked, setIsAddNewTodoClicked] = useState(false);

  // overdueTodolist
  const msMidnight = new Date(today.year, today.month, today.date, 0, 0, 0).getTime();
  const overdueTodoList = todoList.filter((todo) => todo.timestamp < msMidnight);
  const sortedOverdueTodoList = sortedTodoList.filter((todo) => todo.timestamp < msMidnight);

  // todoList
  const addTodo = (newTodo) => {
    db.collection('todo-list').add(newTodo);
  };

  const removeTodo = (id) => {
    db.collection('todo-list').doc(id).delete();
  };

  const toggleComplete = (todo) => {
    db.collection('todo-list').doc(todo.id).update({ completed: !todo.completed });
  };

  // sort (recent / tag / oldest / completed / active)
  const updateSelectedSort = (newSort) => {
    db.collection('selected-sort').doc('A7ftOcAem11mu3euKuIs').update({ sort: newSort });
  };

  // view state (daily / weekly / monthly)
  const updateSelectedView = (newView) => {
    db.collection('selected-view').doc('YkJEvAzlpeXKxbHJ9zfA').update({ view: newView });
  };

  // isAddNewTodoClicked
  const toggleIsAddNewTodoClicked = () => {
    setIsAddNewTodoClicked(!isAddNewTodoClicked);
  };

  // global states
  const value = {
    today, // HomeMain, TimeDisplay, Daily, Weekly, Monthly, AddNewTodoForm
    todoList, // HomeMain, MonthlyList, Daily
    addTodo, // AddNewTodoForm
    removeTodo, // TodoItem, InnerList
    toggleComplete, // TodoItem, InnerList
    selectedSort, // SelectSort, Daily, Weekly
    updateSelectedSort, // SelectSort
    sortedTodoList, // Daily, Weekly
    overdueTodoList, // Daily, Weekly, TodoList
    sortedOverdueTodoList, // Daily, TodoList
    selectedView, // Nav, SelectView
    updateSelectedView, // SelectView
    isAddNewTodoClicked, // HomeMain, AddNewTodoForm
    toggleIsAddNewTodoClicked // HomeMain, HeaderShared, HeaderMonthly, useOnClickOutside.js
  };

  return <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>;
};
