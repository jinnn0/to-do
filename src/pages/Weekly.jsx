import React, { useContext } from "react";
import HeaderShared from "../components/shared/HeaderShared";
import TodoList from "../components/shared/TodoList.jsx";
import { GlobalContext } from "../contexts/GlobalState";

function Weekly() {
  const { today } = useContext(GlobalContext);
  const { handleClickOutsideAddButton } = useContext(GlobalContext);

  let thisWeek = [];
  let counter = 0;
  for (let i = 0; i < 7; i++) {
    let nextDayConstructor = new Date(
      today.year,
      today.month,
      today.date + counter
    );

    let nextDay = {
      year: nextDayConstructor.getFullYear(),
      month: nextDayConstructor.getMonth(),
      date: nextDayConstructor.getDate(),
      day: nextDayConstructor.toLocaleString("default", { weekday: "long" })
    };

    counter++;
    thisWeek.push(nextDay);
  }

  thisWeek[0].day = "Today";
  thisWeek[1].day = "Tomorrow";

  return (
    <div className="weekly" onClick={handleClickOutsideAddButton}>
      <div className="main-display container">
        <HeaderShared title={"Weekly"} />
        <div className="weekly-list">
          {thisWeek.map((today) => (
            <TodoList key={today.date} today={today} size="sm" />
          ))}

          {/* needed for extra space at the end of weekly-list */}
          <section>
            <div></div>
          </section>
        </div>
      </div>

      <div className="side-display"></div>
    </div>
  );
}

export default Weekly;
