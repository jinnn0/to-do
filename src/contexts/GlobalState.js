import React, { useState, useEffect, createContext, useRef } from 'react';

export const GlobalContext = createContext();

export const GlobalContextProvider = (props) => {
  // date state
  const today = {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    date: new Date().getDate()
  };

  // sample todoList
  // prettier-ignore
  const sampleTasks = ["Daily web development", "Get groceries for dinner", "Home exercise at 6pm", "Call Daniel for meeting", "House cleaning", "Tennis practice", "Do lundary", "Email Noah for update", "Finish monthly growth report", "Send in cacenllation letter", "Figure our vacation destination", "Fill in scholarship application" ]
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
      id: task,
      task: task,
      completed: Math.random() >= 0.5,
      type: randomType,
      dateInfo: {
        year: today.year,
        month: today.month,
        date: randomDate
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
  let sortedTodoList = todoList.filter((todo) => {
    if (sortValue === 'recent' || sortValue === 'tag' || sortValue === 'oldest') {
      return todo;
    } else if (sortValue === 'completed') {
      return todo.completed;
    } else if (sortValue === 'active') {
      return !todo.completed;
    }

    return todo;
  });

  // window resize for all pages
  let [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const homeMainDivRef = useRef();
  const [homeMainDivTouching, setHomeMainDivTouching] = useState(false);

  useEffect(() => {
    const currentTop = homeMainDivRef.current.getBoundingClientRect().top;
    // nav-height-bg 72px + time-display 50px = 130
    // set the div to display block so that
    // it stays below time display when shrinking small
    if (currentTop < 130) {
      setHomeMainDivTouching(true);
      if (windowSize.height > 544) {
        setHomeMainDivTouching(false);
      }
    }

    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    let vh = windowSize.height * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize]);

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
    homeMainDivRef,
    homeMainDivTouching,
    sortedTodoList
  };

  return <GlobalContext.Provider value={value}>{props.children}</GlobalContext.Provider>;
};
