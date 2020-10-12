import React, { useState, useContext } from 'react';
import shortid from 'shortid';
import NewTodo from '../AddNewTodoForm/NewTodo';
import DateInput from '../AddNewTodoForm/DateInput';
import { GlobalContext } from '../../contexts/GlobalState';

function AddNewTodoForm() {
  const { today, addNewTodoButtonClicked, setAddNewTodoButtonClicked, addTodo } = useContext(GlobalContext);
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
      hour: today.hour,
      minute: today.minute
    }
  });

  const handleInputChange = (e) => {
    const value = e.target.value;

    setTodo({
      ...todo,
      [e.target.name]: value
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
    setAddNewTodoButtonClicked(!addNewTodoButtonClicked);
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
      className={`add-new-todo-form ${addNewTodoButtonClicked ? ' show-add-new-todo-form' : ''}`}
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
