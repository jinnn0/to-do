import React from 'react';
import InnerList from './InnerList';

function OuterList({ eachDay }) {
  return (
    <li className="outer-ul__list">
      <div className="row-1">
        <span className="date">{eachDay[0].dateInfo.date}</span>
        <span className="day">{eachDay[0].dateInfo.day}</span>
      </div>

      <ul className="row-2 inner-ul">
        {eachDay.map((todo) => (
          <InnerList key={todo.id} todo={todo} />
        ))}
      </ul>
    </li>
  );
}

export default OuterList;
