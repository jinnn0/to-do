import React, { useState, useContext, useRef } from 'react';
import shortid from 'shortid';
import NewTodo from './NewTodo';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import useOnClickOutside from '../hooks/useOnClickOutside';
import { GlobalContext } from '../contexts/GlobalState';

function AddNewTodoForm() {
  const { today, isAddNewTodoClicked, toggleIsAddNewTodoClicked, addTodo } = useContext(GlobalContext);
  const [startDate, setStartDate] = useState(new Date());
  const [isColorBoxClicked, setIsColorBoxClicked] = useState(false);
  const [todo, setTodo] = useState({
    id: null,
    task: '',
    timestamp: new Date().getTime(),
    type: 'important',
    completed: false,
    dateInfo: {
      year: today.year,
      month: today.month,
      date: today.date,
      day: today.day,
      hour: today.hour,
      minute: today.minute
    }
  });
  const formmRef = useRef();

  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      task: e.target.value
    });
  };

  const showSelectTypeColorDropDown = () => {
    setIsColorBoxClicked(!isColorBoxClicked);
  };

  const handleSelectType = (e) => {
    setIsColorBoxClicked(!isColorBoxClicked);
    setTodo({
      ...todo,
      type: e.target.dataset.colorType
    });
  };

  const handleDateSelect = (e) => {
    setStartDate(e);
    setTodo({
      ...todo,
      timestamp: new Date(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes()).getTime(),
      dateInfo: {
        year: e.getFullYear(),
        month: e.getMonth(),
        date: e.getDate(),
        day: e.toLocaleString('default', { weekday: 'long' }),
        hour: e.getHours(),
        minute: e.getMinutes()
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      id: shortid.generate(),
      task: todo.task
    };

    if (todo.task.trim()) {
      addTodo(newTodo);
    }

    setTodo({ ...todo, task: '' });
    toggleIsAddNewTodoClicked();
  };

  useOnClickOutside(formmRef, toggleIsAddNewTodoClicked);

  return (
    <form
      action=""
      ref={formmRef}
      onSubmit={handleSubmit}
      onClick={(e) => {
        e.stopPropagation();
      }}
      className={`add-new-todo-form ${isAddNewTodoClicked ? ' show-add-new-todo-form' : ''}`}
    >
      <NewTodo
        handleInputChange={handleInputChange}
        todo={todo}
        isColorBoxClicked={isColorBoxClicked}
        setIsColorBoxClicked={setIsColorBoxClicked}
        selectTypeColor={todo.type}
        showSelectTypeColorDropDown={showSelectTypeColorDropDown}
        handleSelectType={handleSelectType}
      />

      <DatePicker
        selected={startDate}
        onChange={handleDateSelect}
        timeInputLabel="Time:"
        showWeekNumbers
        minDate={new Date()}
        showTimeInput
        shouldCloseOnSelect={false}
      />

      <button className="submit" type="submit">
        Add new task
      </button>
    </form>
  );
}

export default AddNewTodoForm;
