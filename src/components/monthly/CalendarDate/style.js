import styled from 'styled-components';

const CalendarDateContainer = styled.span`
    display: inline-block;
    font-size: 0.9em;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    cursor: pointer;

    @media (min-width: 900px) {
        width: 50px;
        height: 50px;
    }

    .no-todo-message::before {
        content: 'No todo';
        position: absolute;
        left: 130%;
        width: 80px;
        height: 50px;
        border-radius: 3px;
        background-color: rgb(242, 242, 242);
        color: rgb(123, 123, 123);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1;
      }

            /* small tail on the right border */
     .no-todo-message:after {
        content: '';
        display: block;
        width: 0;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translateY(-50%);
        border-color: rgba(0, 0, 0, 0) rgba(242, 242, 242, 0.762);
        border-style: solid;
        border-width: 15px;
        border-left-width: 0;
      }

      .date-prev-month,
      .date-next-month {
        color: rgb(192, 192, 192);
      }

      .today {
        background-color: rgba(255, 227, 184, 0.411);
      }

      .weekend {
        color: rgb(123, 123, 123);
      }
`