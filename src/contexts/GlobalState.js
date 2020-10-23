import React, { useState, useEffect, createContext } from 'react';
import sampleTodoList from '../utils/sampleTodoList';

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

  // todoList state
  const initialTodoList = JSON.parse(localStorage.getItem('to-do-list')) || sampleTodoList;
  const [todoList, setTodoList] = useState(initialTodoList);

  useEffect(() => {
    localStorage.setItem('to-do-list', JSON.stringify(todoList));
  }, [todoList]);

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  const removeTodo = (id) => {
    const updatedTodo = todoList.filter((todo) => id !== todo.id);
    setTodoList(updatedTodo);
  };

  const toggleComplete = (id) => {
    const updatedTodo = todoList.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });

    setTodoList(updatedTodo);
  };

  // sort state (recent / tag / oldest / completed / active)
  const initialSort = JSON.parse(localStorage.getItem('sort-value')) || 'oldest';
  const [selectedSort, setSelectedSort] = useState(initialSort);

  useEffect(() => {
    localStorage.setItem('sort-value', JSON.stringify(selectedSort));
  }, [selectedSort]);

  const updateSelectedSort = (newSort) => {
    setSelectedSort(newSort);
  };

  // sorted todoList
  let sortedTodoList;
  if (selectedSort === 'oldest') {
    sortedTodoList = todoList.sort((a, b) => {
      return a.timestamp - b.timestamp;
    });
  } else if (selectedSort === 'newest') {
    sortedTodoList = todoList.sort((a, b) => {
      return b.timestamp - a.timestamp;
    });
  } else if (selectedSort === 'tag') {
    const ordering = {};
    const sortOrder = ['important', 'work', 'study', 'other'];
    for (let i = 0; i < sortOrder.length; i++) {
      ordering[sortOrder[i]] = i;
    }
    sortedTodoList = todoList.sort((a, b) => {
      return ordering[a.type] - ordering[b.type];
    });
  } else if (selectedSort === 'completed') {
    sortedTodoList = todoList.filter((todo) => todo.completed);
  } else if (selectedSort === 'active') {
    sortedTodoList = todoList.filter((todo) => !todo.completed);
  }

  const generateTodos = (todos) => {
    return todos.filter(
      (todo) =>
        todo.dateInfo.year === today.year &&
        todo.dateInfo.month === today.month &&
        todo.dateInfo.date === today.date
    );
  };

  const unsortedTodosToday = generateTodos(todoList);
  const sortedTodosToday = generateTodos(sortedTodoList);

  // overdue todolist state
  const msMidnight = new Date(today.year, today.month, today.date, 0, 0, 0).getTime();
  const overdueTodoList = todoList.filter((todo) => todo.timestamp < msMidnight);
  const sortedOverdueTodoList = sortedTodoList.filter((todo) => todo.timestamp < msMidnight);

  // view state (daily / weekly / monthly)
  const initialView = JSON.parse(localStorage.getItem('selected-view')) || 'daily';
  const [selectedView, setSelectedView] = useState(initialView);

  useEffect(() => {
    localStorage.setItem('selected-view', JSON.stringify(selectedView));
  }, [selectedView]);

  const updateSelectedView = (newValue) => {
    setSelectedView(newValue);
  };

  // isAddNewTodoClicked state
  const [isAddNewTodoClicked, setIsAddNewTodoClicked] = useState(false);

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
    unsortedTodosToday, // TodoList
    sortedTodosToday, // Daily, TodoList
    overdueTodoList, // Daily, Weekly, TodoList
    sortedOverdueTodoList, // Daily, TodoList
    selectedView, // Nav, SelectView
    updateSelectedView, // SelectView
    isAddNewTodoClicked, // HomeMain, AddNewTodoForm
    toggleIsAddNewTodoClicked // HomeMain, HeaderShared, HeaderMonthly, useOnClickOutside.js
  };

  return <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>;
};
