import React, { useContext } from 'react';
import TodoList from '../../components/TodoList';
import Header from '../../components/Header';
import { RiPushpin2Line } from 'react-icons/ri';
import { GlobalContext } from '../../contexts/GlobalState';
import { MainContainer, Main, Side, ListWrapper, Heading } from '../../styles/shared';
import { NoTodoMessage } from './style';

function Daily() {
  const {
    today,
    selectedSort,
    todoList,
    sortedTodoList,
    overdueTodoList,
    sortedOverdueTodoList
  } = useContext(GlobalContext);

  const todosToday = (todos) => {
    return todos.filter(
      (todo) =>
        todo.dateInfo.year === today.year &&
        todo.dateInfo.month === today.month &&
        todo.dateInfo.date === today.date
    );
  };

  const unsortedTodosToday = todosToday(todoList);
  const sortedTodosToday = todosToday(sortedTodoList);

  const showNoTodoMessage = (isOverdueList) => {
    let unSortedTodos = isOverdueList ? overdueTodoList : unsortedTodosToday;
    let sortedTodos = isOverdueList ? sortedOverdueTodoList : sortedTodosToday;
    let message;

    if (!unSortedTodos.length) {
      message = 'Add new todo at the top right corner';
    } else if (selectedSort === 'completed' && !sortedTodos.length && unSortedTodos.length) {
      message = isOverdueList ? 'No completed overdue todos yet' : 'No completed todos yet';
    } else if (selectedSort === 'active' && !sortedTodos.length && unSortedTodos.length) {
      message = isOverdueList ? 'All overdue todos are completed' : 'All todos are completed';
    }

    return message;
  };

  return (
    <MainContainer className="daily">
      <Main>
        <Header title={'Today'} />
        {overdueTodoList.length ? (
          <ListWrapper md overdueMd>
            <Heading>
              Overdue <RiPushpin2Line />
            </Heading>
            <TodoList todosToday={sortedOverdueTodoList} isOverdueList />
            <NoTodoMessage>{showNoTodoMessage(true)}</NoTodoMessage>
          </ListWrapper>
        ) : null}

        <ListWrapper md>
          <TodoList todosToday={sortedTodosToday} />
          <NoTodoMessage>{showNoTodoMessage()}</NoTodoMessage>
        </ListWrapper>
      </Main>
      <Side></Side>
    </MainContainer>
  );
}

export default Daily;
