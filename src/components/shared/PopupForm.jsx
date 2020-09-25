import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { GlobalContext } from "../../contexts/GlobalState";

function PopupForm({ addButtonClicked, setAddButtonClicked }) {
  let d = new Date();

  const { addTodo } = useContext(GlobalContext);
  const [startDate, setStartDate] = useState(new Date());
  const [todo, setTodo] = useState({
    task: "",
    type: "purple",
    dateInfo: {
      date: d.getDate(),
      month: d.getMonth(),
      year: d.getFullYear(),
      hour: d.getHours(),
      minute: d.getMinutes()
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
      id: Date.now(),
      task: todo.task,
      completed: false,
      type: todo.type,
      dateInfo: {
        date: todo.dateInfo.date,
        month: todo.dateInfo.month,
        year: todo.dateInfo.year,
        hour: todo.dateInfo.hour,
        minute: todo.dateInfo.minute
      }
    };

    addTodo(newTodo);
    setTodo({ ...todo, task: "" });
    setAddButtonClicked(!addButtonClicked);
  };

  const handleDateChange = (e) => {
    setTodo({
      ...todo,
      dateInfo: {
        date: e.getDate(),
        month: e.getMonth(),
        year: e.getFullYear(),
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
      className={"popup-form" + (addButtonClicked ? " show-form" : "")}
    >
      <NewTask handleInputChange={handleInputChange} todo={todo} />
      <DateInput
        startDate={startDate}
        handleDateChange={handleDateChange}
        handleDateSelect={handleDateSelect}
      />
      <button type="submit">Add new task</button>
    </form>
  );
}

export default PopupForm;

function NewTask({ handleInputChange, todo }) {
  return (
    <div className="new-task-box flex v-center">
      <input
        type="text"
        onChange={handleInputChange}
        value={todo.task}
        type="text"
        placeholder="New task"
        className="text-input"
        name="task"
      />

      <select onChange={handleInputChange} value={todo.type} name="type">
        <option value="blue">blue</option>
        <option value="purple">purple</option>
        <option value="pink">pink</option>
        <option value="orange">orange</option>
      </select>

      {/* <ul className="select-type">
        <li className="type flex v-center">
          <span className="color-box"></span>
        </li>
      </ul> */}
    </div>
  );
}

function DateInput({ startDate, handleDateSelect, handleDateChange }) {
  return (
    <div>
      <DatePicker
        selected={startDate}
        onChange={handleDateChange}
        onSelect={handleDateSelect}
        showTimeInput
        showWeekNumbers
        shouldCloseOnSelect={false}
        timeInputLabel="Time:"
        showTimeInput
      />
    </div>
  );
}
