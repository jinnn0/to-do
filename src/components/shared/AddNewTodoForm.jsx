import React, { useState, useContext } from "react";
import NewTodo from "../AddNewTodoForm/NewTodo";
import DateInput from "../AddNewTodoForm/DateInput";
import { GlobalContext } from "../../contexts/GlobalState";

function AddNewTodoForm() {
  let d = new Date();

  const [colorBoxClicked, setColorBoxClicked] = useState(false);
  const [defaultColorType, setDefaultColorType] = useState("important");

  const handleDefaultSelect = () => {
    setColorBoxClicked(!colorBoxClicked);
  };

  const handleSelectType = (e) => {
    setDefaultColorType(e.target.dataset.colorType);
    setColorBoxClicked(!colorBoxClicked);
  };

  const { addTodo } = useContext(GlobalContext);
  const { addButtonClicked, setAddButtonClicked } = useContext(GlobalContext);
  const [startDate, setStartDate] = useState(new Date());
  const [todo, setTodo] = useState({
    task: "",
    type: defaultColorType,
    dateInfo: {
      year: d.getFullYear(),
      month: d.getMonth(),
      date: d.getDate(),
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
      type: defaultColorType,
      dateInfo: {
        year: todo.dateInfo.year,
        month: todo.dateInfo.month,
        date: todo.dateInfo.date,
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
        year: e.getFullYear(),
        month: e.getMonth(),
        date: e.getDate(),
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
      className={"add-new-todo-form" + (addButtonClicked ? " show-form" : "")}
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
