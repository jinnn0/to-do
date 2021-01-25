import styled from 'styled-components';

const MonthlyListContainer = styled.section`
    flex: 1.2;
    margin-top: 6rem;
    position: relative;

    @media (min-width: 1100px) {
        flex: 1;
        border-left: 1px solid rgba(0, 0, 0, 0.118);
        margin-top: 0;
        padding-left: 3rem;
        padding-right: 1rem;
    }
`

const SearchForm = styled.form`
    width: 96%;
    height: 27px;
    display: flex;
    align-items: center;
    padding-left: 0.4em;
    margin-bottom: 1.8em;
    background-color: rgb(241, 241, 243);
    border-radius: 5px;
    position: relative;

    @media (min-width: 1550px) {
        height: 35px;
        margin-bottom: 1.6em;
    }

    .search-icon {
        position: absolute;
        width: 12px;
        height: 12px;

        @media (min-width: 1550px) {
        width: 16px;
        height: 16px;
        }
    }

    input {
        flex: 1;
        height: 100%;
        margin-left: 1.5em;
        margin-left: 2em;
        border: none;
        background-color: transparent;
        outline: none;
        padding-bottom: 2px;

        &::placeholder {
        font-size: 1em;
        line-height: 17px;

        @media (min-width: 550px) {
            font-size: 0.83em;
            line-height: 20px;
        }
        }
    }
`

const MonthName = styled.h2`
    color: rgba(0, 0, 0, 0.781);
    font-size: 1em;
    height: 18px;
    margin-bottom: 1.5em;

    @media (min-width: 1550px) {
        font-size: 1.5em;
        height: 29px;
        margin-bottom: 1.3em;
    }

    .todos-length {
        margin-left: 5px;
    }
`

const ListWrapper = styled.ul`
    height: 500px;
    padding-right: 1em;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;

    /* 100% - (form height + form mg bottom + monthlyList title height + monthly title mg bottom) */
    @media (min-width: 1100px) {
        height: calc(100% - 45px - 3.3em);
    }

    @media (min-width: 1550px) {
        height: calc(100% - 64px - 2.9em);
    }
`

export {MonthlyListContainer, SearchForm, MonthName, ListWrapper}