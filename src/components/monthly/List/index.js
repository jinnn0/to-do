import React from 'react';
import ListItem from '../ListItem';
import {ListContainer, ListHeader, ListItemWrapper} from './style'
 
function List({ eachDay }) {
  return (
    <ListContainer data-id={eachDay[0].dateInfo.date}>
      <ListHeader>
        <span className="date">{eachDay[0].dateInfo.date}</span>
        <span className="day">{eachDay[0].dateInfo.day}</span>
      </ListHeader>

      <ListItemWrapper>
        {eachDay.map((todo) => (
          <ListItem key={todo.id} todo={todo} />
        ))}
      </ListItemWrapper>
    </ListContainer>
  );
}

export default List;
