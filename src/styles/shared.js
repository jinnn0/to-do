import styled, { css } from 'styled-components';

const Container = styled.div`
  padding-left: var(--container-padding);
  padding-right: var(--container-padding);
`;

const MainContainer = styled.main`
  height: calc(100vh - var(--nav-height)); // fallback
  height: calc(var(--mobile-100vh-fix) - var(--nav-height));
  margin-top: var(--nav-height);
  display: flex;
  background-color: white;

  @media (min-width: 750px) {
    padding-top: var(--nav-height-bg);
  }

  .weekly {
    position: relative;
    height: auto;

    @media (min-width: 900px) {
      height: calc(var(--mobile-100vh-fix) - var(--nav-height));
    }
  }

  .monthly {
    height: auto;

    @media (min-width: 1100px) {
      height: calc(var(--mobile-100vh-fix) - var(--nav-height));
    }

    /* when min-width is greater than 1300px but in short landscape mode */
    @media (min-width: 1100px) and (max-height: 750px) {
      height: auto;
    }
  }
`;

const Main = styled(Container)`
  width: 100%;

  @media (min-width: 750px) {
    flex-basis: 75%;
  }
`;

const Side = styled.aside`
  background-color: rgb(250, 250, 250);

  @media (min-width: 750px) {
    flex-basis: 25%;
  }
`;

const Select = styled.select`
  border: 1px solid #aaa;
  border: 1px solid rgba(170, 170, 170, 0.193);
  padding: 2px 0 2px 5px;
  border-radius: 5px;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  outline: none;
  background-color: white;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat;
  background-position: right 0.7rem top 50%;
  background-size: 0.65em auto, 100%;
  cursor: pointer;

  &::-ms-expand {
    display: none;
  }
`;

const ListWrapper = styled.div`
  margin-bottom: 5em;

  ${(props) =>
    props.sm &&
    css`
      max-width: 520px;

      @media (min-width: 750px) {
        min-width: 360px;
      }

      @media (min-width: 900px) {
        margin-right: 5rem;
      }
    `}

  ${(props) =>
    props.md &&
    css`
      max-width: 700px;
    `}

    ${(props) =>
    props.overdue &&
    css`
      position: relative;

      h2 {
        display: flex;
        align-items: center;

        .pin-icon {
          font-size: 0.75em;
          margin-left: 5px;
          padding-top: 2px;
        }
      }
    `}

    ${(props) =>
    props.overdueMd &&
    css`
      padding-bottom: 2em;

      &::before {
        content: '';
        position: absolute;
        bottom: -10px;
        width: 100%;
        height: 1px;
        background-color: rgba(0, 0, 0, 0.062);
      }
    `}
`;

const Heading = styled.h2`
  font-size: 1em;
  margin-bottom: 2.3rem;

  @media (min-width: 900px) {
    font-size: 1.5em;
    margin-bottom: 3rem;
  }
`;

export { MainContainer, Main, Side, Select, ListWrapper, Heading };
