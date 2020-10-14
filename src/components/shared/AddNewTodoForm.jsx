import React, { useState, useContext } from 'react';
import shortid from 'shortid';
import NewTodo from '../todo-form/NewTodo';
import DateInput from '../todo-form/DateInput';
import { GlobalContext } from '../../contexts/GlobalState';

function AddNewTodoForm() {
  const { today, isAddNewTodoClicked, setIsAddNewTodoClicked, addTodo } = useContext(GlobalContext);
  const [colorBoxClicked, setColorBoxClicked] = useState(false);
  const [defaultColorType, setDefaultColorType] = useState('important');
  const [startDate, setStartDate] = useState(new Date());
  const [todo, setTodo] = useState({
    task: '',
    type: defaultColorType,
    completed: false,
    dateInfo: {
      year: today.year,
      month: today.month,
      date: today.date,
      day: today.day,
      hour: new Date().getHours(),
      minute: new Date().getMinutes()
    }
  });

  const handleInputChange = (e) => {
    setTodo({
      ...todo,
      task: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: shortid.generate(),
      task: todo.task,
      ...todo
    };

    if (todo.task.trim()) {
      addTodo(newTodo);
    }
    setTodo({ ...todo, task: '' });
    setIsAddNewTodoClicked(!isAddNewTodoClicked);
  };

  const handleDefaultSelect = () => {
    setColorBoxClicked(!colorBoxClicked);
  };

  const handleSelectType = (e) => {
    setDefaultColorType(e.target.dataset.colorType);
    setColorBoxClicked(!colorBoxClicked);
  };

  const handleDateChange = (e) => {
    setTodo({
      ...todo,
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

  const handleDateSelect = (e) => {
    setStartDate(e);
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
        colorBoxClicked={colorBoxClicked}
        defaultColorType={defaultColorType}
        handleDefaultSelect={handleDefaultSelect}
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
