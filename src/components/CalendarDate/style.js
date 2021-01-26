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
`
export {CalendarDateContainer} 