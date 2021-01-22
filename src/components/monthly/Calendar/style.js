import styled from 'styled-components';


const CalendarContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  
  @media (min-width: 1100px) {
      flex: 1.1;
      max-height: inherit;
      margin-right: 3rem;
  }
`

const CalendarHeader = styled.div`
    width: 100%;
    flex: 1;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    color: rgb(128, 128, 128);

    span {
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
    }
`



export {CalendarContainer, CalendarHeader}