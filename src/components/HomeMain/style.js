import styled from 'styled-components';

const HomeMainContainer = styled.div`
  height: calc(100% - var(--time-display-height));

  .z-index {
    z-index: 4;
  }

  .add-new-todo-form {
    display: flex;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media (min-width: 500px) {
      width: 500px;
    }

    &:before {
      display: none; /* remove box tail on home page */
    }
  }
`;

const HomeMainWrapper = styled.div`
  width: calc(100vw - (var(--container-padding) * 2));
  min-width: 280px;
  max-width: 700px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  position: relative;

  @media (min-width: 500px) {
    width: 80vw;
  }

  @media (min-width: 750px) {
    padding: 2em;
  }

  .todo-item {
    height: 3.2em;
    border-radius: 3.16em;
    box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.07);
    padding-left: 1.1rem;
    margin-bottom: 1.3rem;

    @media (min-width: 750px) {
      font-size: 18px;
      padding-left: 1.2em;
      margin-bottom: 2rem;
    }
  }
`;

const Title = styled.h1`
  font-size: 1.1em;
  color: $title;
  margin-bottom: 1.4rem;
  padding-left: 15px;

  @media (min-width: 1550px) {
    font-size: 1.3em;
  }
`;

const Arrows = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 1rem;

  .arrow {
    cursor: pointer;
    font-size: 1.1rem;
    font-size: 1.3rem;
    color: rgba(0, 0, 0, 0.233);
  }

  .arrow-back {
    margin-right: 1rem;
  }
`;

const InitialMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  transform: translateY(30px); /* animation */
  cursor: pointer;

  .point-down-icon {
    opacity: 0;
    animation: pointDown 0.5s ease-in-out infinite alternate;
    margin-bottom: 1.5rem;
  }

  @keyframes pointDown {
    0% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const Message = styled.h1`
  font-size: 1.1em;

  @media (min-width: 1550px) {
    font-size: 1.3em;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.249);
  z-index: 3;
`;

export { HomeMainContainer, HomeMainWrapper, Title, Arrows, InitialMessageContainer, Message, Overlay };
