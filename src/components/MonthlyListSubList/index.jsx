import React from 'react';
import MonthlyListSubListItem from '../MonthlyListSubListItem';
import { ListContainer, ListHeader, ListItemWrapper } from './style';

function MonthlyListSubList({ eachDay }) {
  return (
    <ListContainer data-id={eachDay[0].dateInfo.date}>
      <ListHeader>
        <span className="date">{eachDay[0].dateInfo.date}</span>
        <span className="day">{eachDay[0].dateInfo.day}</span>
      </ListHeader>

      <ListItemWrapper>
        {eachDay.map((todo) => (
          <MonthlyListSubListItem key={todo.id} todo={todo} />
        ))}
      </ListItemWrapper>
    </ListContainer>
  );
}

export default MonthlyListSubList;
