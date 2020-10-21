import React, { useState, useContext } from 'react';
import shortid from 'shortid';
import NewTodo from '../todo-form/NewTodo';
import DateInput from '../todo-form/DateInput';
import { GlobalContext } from '../../contexts/GlobalState';

function AddNewTodoForm() {
  const { today, isAddNewTodoClicked, setIsAddNewTodoClicked, addTodo } = useContext(GlobalContext);
  const [isColorBoxClicked, setIsColorBoxClicked] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [todo, setTodo] = useState({
    id: null,
    task: '',
    timestamp: null,
    type: 'important',
    completed: false,
    dateInfo: {
      year: today.year,
      month: today.month,
      date: today.date,
      day: today.day
    }
  });

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

  const handleDateChange = (e) => {
    setTodo({
      ...todo,
      dateInfo: {
        year: e.getFullYear(),
        month: e.getMonth(),
        date: e.getDate(),
        day: e.toLocaleString('default', { weekday: 'long' })
      }
    });
  };

  const handleDateSelect = (e) => {
    setStartDate(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      ...todo,
      id: shortid.generate(),
      task: todo.task,
      timestamp: new Date().getTime()
    };

    if (todo.task.trim()) {
      addTodo(newTodo);
    }
    setTodo({ ...todo, task: '' });
    setIsAddNewTodoClicked(!isAddNewTodoClicked);
  };

  return (
    <form
      action=""
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
        selectTypeColor={todo.type}
        showSelectTypeColorDropDown={showSelectTypeColorDropDown}
        handleSelectType={handleSelectType}
      />
      <DateInput
        startDate={startDate}
        handleDateChange={handleDateChange}
        handleDateSelect={handleDateSelect}
      />

      <button className="submit" type="submit">
        Add new task
      </button>
    </form>
  );
}

export default AddNewTodoForm;
