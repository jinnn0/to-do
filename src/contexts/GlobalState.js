import React, { useState, useEffect, createContext } from 'react';
import shortid from 'shortid';

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  // date state
  let today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    monthName: new Date().toLocaleString('default', { month: 'short' }),
    date: new Date().getDate(),
    day: new Date().toLocaleString('default', { weekday: 'short' })
  };

  // sample todoList
  // prettier-ignore
  const sampleTasks = ["Daily web development", "Get groceries for dinner", "Home exercise at 6pm", "Call Daniel for meeting", "House cleaning", "Tennis practice", "Do lundary", "Email Noah for update", "Finish monthly growth report", "Send in cacenllation letter", "Figure out vacation destination", "Fill in scholarship application" ]
  const todoTypes = ['important', 'work', 'study', 'other'];

  const sampleTodoList = sampleTasks.map((task, index) => {
    let randomDate;
    let randomType;
    if (index < 2) {
      randomDate = today.date;
      randomType = todoTypes[0];
    } else {
      randomDate = today.date + Math.floor(Math.random() * 7);
      randomType = todoTypes[Math.floor(Math.random() * 4)];
    }

    return {
      id: shortid.generate(),
      task: task,
      type: randomType,
      completed: Math.random() >= 0.5,
      dateInfo: {
        year: today.year,
        month: today.month,
        date: randomDate,
        day: new Date(today.year, today.month, randomDate).toLocaleString('default', { weekday: 'long' })
      }
    };
  });

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
    setTodoList(todoList.filter((todo) => id !== todo.id));
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

  // isAddNewTodoClicked state
  const [isAddNewTodoClicked, setIsAddNewTodoClicked] = useState(false);

  const showAddNewTodoForm = () => {
    setIsAddNewTodoClicked(!isAddNewTodoClicked);
  };

  const hideAddNewTodoForm = () => {
    if (isAddNewTodoClicked) {
      setIsAddNewTodoClicked(!isAddNewTodoClicked);
    }
  };

  // view state (daily / weekly / monthly)
  const initialView = JSON.parse(localStorage.getItem('selected-view')) || 'daily';
  const [selectedView, setSelectedView] = useState(initialView);

  useEffect(() => {
    localStorage.setItem('selected-view', JSON.stringify(selectedView));
  }, [selectedView]);

  const updateSelectedView = (newValue) => {
    setSelectedView(newValue);
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

  // sorted list
  let sortedTodoList = todoList;
  if (selectedSort === 'newest') {
    sortedTodoList = todoList.reverse();
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

  // global states
  const value = {
    today, // HomeMain, TimeDisplay, Daily, Weekly, Monthly, AddNewTodoForm
    todoList, // HomeMain, MonthlyList
    addTodo, // AddNewTodoForm
    removeTodo, // TodoItem, InnerList
    toggleComplete, // TodoItem, InnerList
    selectedView, // Nav, SelectView
    updateSelectedView, // SelectView
    selectedSort, // SelectSort, Daily, Weekly
    updateSelectedSort, // SelectSort
    isAddNewTodoClicked, // HomeMain, AddNewTodoForm
    setIsAddNewTodoClicked, // AddNewTodoForm
    showAddNewTodoForm, // HomeMain, HeaderShared, HeaderMonthly
    hideAddNewTodoForm, // HomeMain, Daily, Weekly, Monthly, useUnmount.js
    sortedTodoList // Daily, Weekly
  };

  return <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>;
};
