import styled from 'styled-components';

const ListContainer = styled.li`
  margin-bottom: 2em;
`

const ListHeader = styled.div`
    display: flex;
    margin-bottom: 1em;

    .date {
        font-size: 1.2em;
        font-weight: bold;
        line-height: 15px;
        flex-basis: 13%;

        @media (min-width: 1550px) {
        font-size: 1.5em;
        line-height: 23px;
        }
    }

    .day {
        flex-basis: 87%;
        font-size: 0.8em;
        color: rgba(0, 0, 0, 0.349);
        border-top: 1px solid rgba(0, 0, 0, 0.118);
        padding-top: 0.45rem;
    }
`

const ListItemWrapper = styled.ul`
  height: 100%;
`

export {ListContainer, ListHeader, ListItemWrapper}