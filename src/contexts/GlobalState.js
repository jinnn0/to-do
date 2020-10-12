import React, { useState, useEffect, createContext } from 'react';
import shortid from 'shortid';

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  // sample todoList
  // prettier-ignore
  const sampleTasks = ["Daily web development", "Get groceries for dinner", "Home exercise at 6pm", "Call Daniel for meeting", "House cleaning", "Tennis practice", "Do lundary", "Email Noah for update", "Finish monthly growth report", "Send in cacenllation letter", "Figure out vacation destination", "Fill in scholarship application" ]
  const todoTypes = ['important', 'work', 'study', 'other'];

  // date state
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate(),
    day: new Date().toLocaleString('default', { weekday: 'long' }),
    hour: new Date().getHours(),
    minute: new Date().getMinutes()
  };

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

  // view state (daily / weekly / monthly)
  const initialViewValue = JSON.parse(localStorage.getItem('selected-view')) || 'daily';
  const [selectedView, setSelectedView] = useState(initialViewValue);

  useEffect(() => {
    localStorage.setItem('selected-view', JSON.stringify(selectedView));
  }, [selectedView]);

  const updateSelectedView = (newValue) => {
    setSelectedView(newValue);
  };

  // sort state (recent / tag / oldest / completed / active)
  const initialSortValue = JSON.parse(localStorage.getItem('sort-value')) || 'recent';
  const [sortValue, setSortValue] = useState(initialSortValue);

  useEffect(() => {
    localStorage.setItem('sort-value', JSON.stringify(sortValue));
  }, [sortValue]);

  const updateSortValue = (newSort) => {
    setSortValue(newSort);
  };

  // add new todo button state
  const [addNewTodoButtonClicked, setAddNewTodoButtonClicked] = useState(false);

  const handleClickAddNewTodoButton = () => {
    setAddNewTodoButtonClicked(!addNewTodoButtonClicked);
  };

  const handleClickOutsideForm = () => {
    if (addNewTodoButtonClicked) {
      setAddNewTodoButtonClicked(!addNewTodoButtonClicked);
    }
  };

  // sorted list
  let sortedTodoList = todoList;
  if (sortValue === 'newest') {
    sortedTodoList = todoList.reverse();
  } else if (sortValue === 'tag') {
    const ordering = {};
    const sortOrder = ['important', 'work', 'study', 'other'];
    for (let i = 0; i < sortOrder.length; i++) {
      ordering[sortOrder[i]] = i;
    }
    sortedTodoList = todoList.sort((a, b) => {
      return ordering[a.type] - ordering[b.type];
    });
  } else if (sortValue === 'completed') {
    sortedTodoList = todoList.filter((todo) => todo.completed);
  } else if (sortValue === 'active') {
    sortedTodoList = todoList.filter((todo) => !todo.completed);
  }

  // global states
  const value = {
    today,
    todoList,
    addTodo,
    removeTodo,
    toggleComplete,
    selectedView,
    updateSelectedView,
    sortValue,
    updateSortValue,
    addNewTodoButtonClicked,
    setAddNewTodoButtonClicked,
    handleClickAddNewTodoButton,
    handleClickOutsideForm,
    sortedTodoList
  };

  return <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>;
};
