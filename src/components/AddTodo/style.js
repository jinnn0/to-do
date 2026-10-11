import styled from 'styled-components';

const Anchor = styled.div`
  position: relative;
  display: flex;
`;

const TriggerButton = styled.button`
  display: flex;
  padding: 4px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: inherit;
  cursor: pointer;

  &:hover {
    background: #f2f2f7;
  }

  &:focus-visible {
    outline: 2px solid #6966ff;
    outline-offset: 2px;
  }
`;

export { Anchor, TriggerButton };
