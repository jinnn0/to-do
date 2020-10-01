import React, { useState, useEffect, createContext } from "react";

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  // date state
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate()
  };

  // todolist state
  const initialTodoList = JSON.parse(localStorage.getItem("todo-list-app")) || [
    {
      task: "What is your todo today ?",
      type: "important",
      dateInfo: {
        year: today.year,
        month: today.month,
        date: today.date
      }
    },
    {
      task: "New task tomorrow",
      type: "work",
      dateInfo: {
        year: today.year,
        month: today.month,
        date: today.date + 1
      }
    },
    {
      task: "Weekly plan",
      type: "study",
      dateInfo: {
        year: today.year,
        month: today.month,
        date: today.date + 2
      }
    },
    {
      task: "2 hours study session",
      type: "other",
      dateInfo: {
        year: today.year,
        month: today.month,
        date: today.date
      }
    },
    {
      task: "Learn web dev",
      type: "important",
      dateInfo: {
        year: today.year,
        month: today.month,
        date: today.date + 3
      }
    }
  ];

  const [todoList, setTodoList] = useState(initialTodoList);

  useEffect(() => {
    localStorage.setItem("todo-list-app", JSON.stringify(todoList));
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
  const initialViewValue =
    JSON.parse(localStorage.getItem("selected-view")) || "/daily";
  const [selectedView, setSelectedView] = useState(initialViewValue);

  useEffect(() => {
    localStorage.setItem("selected-view", JSON.stringify(selectedView));
  }, [selectedView]);

  const updateSelectedView = (newValue) => {
    setSelectedView(newValue);
  };

  // sort state
  const initialSortValue =
    JSON.parse(localStorage.getItem("sort-value")) || "recent";
  const [sortValue, setSortValue] = useState(initialSortValue);

  useEffect(() => {
    localStorage.setItem("sort-value", JSON.stringify(sortValue));
  }, [sortValue]);

  const updateSortValue = (newSort) => {
    setSortValue(newSort);
  };

  // add new todo button state
  const [addButtonClicked, setAddButtonClicked] = useState(false);
  const handleClickAddNewTodoButton = () => {
    setAddButtonClicked(!addButtonClicked);
  };
  const handleClickOutsideAddButton = (e) => {
    if (
      addButtonClicked &&
      e.target.nodeName !== "svg" &&
      e.target.nodeName !== "FORM" &&
      e.target.nodeName !== "INPUT"
    ) {
      setAddButtonClicked(!addButtonClicked);
    }
  };

  // sort list
  let sortedTodoList = todoList.filter((todo) => {
    if (
      sortValue === "recent" ||
      sortValue === "tag" ||
      sortValue === "oldest"
    ) {
      return todo;
    } else if (sortValue === "completed") {
      return todo.completed;
    } else if (sortValue === "active") {
      return !todo.completed;
    }

    return todo;
  });

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
    addButtonClicked,
    setAddButtonClicked,
    handleClickAddNewTodoButton,
    handleClickOutsideAddButton,
    sortedTodoList
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};
