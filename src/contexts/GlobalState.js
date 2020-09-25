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
      type: "purple",
      dateInfo: {
        year: today.year,
        month: today.month,
        date: today.date
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

  // view state
  const initialViewValue =
    JSON.parse(localStorage.getItem("selected-view")) || "daily";
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
    sortedTodoList
  };

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
};
