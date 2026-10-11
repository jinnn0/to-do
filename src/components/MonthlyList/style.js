import styled from 'styled-components';
import { Card } from '../../styles/shared';

const MonthlyListContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 16px;

  @media (min-width: 1000px) {
    max-height: calc(100dvh - var(--nav-height) - 220px);
    min-height: 420px;
  }
`;

const ListHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 14px;
  border-bottom: 1px solid var(--border);
`;

const MonthName = styled.h2`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.01em;
`;

const SearchField = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 6px 0 12px;
  border: 1px solid transparent;
  border-radius: 10px;
  background: var(--surface-2);
  color: var(--text-3);
  transition: border-color 0.15s, background-color 0.15s;

  &:focus-within {
    border-color: var(--accent);
    background: var(--surface);
  }

  input {
    flex: 1;
    min-width: 0;
    border: 0;
    outline: none;
    background: transparent;
    font-size: 14px;
    color: var(--text);

    &::placeholder {
      color: var(--text-3);
    }

    &::-webkit-search-cancel-button {
      display: none;
    }
  }

  button {
    display: grid;
    place-items: center;
    width: 24px;
    height: 24px;
    border: 0;
    border-radius: 6px;
    background: transparent;
    color: var(--text-3);

    &:hover {
      background: var(--surface-hover);
      color: var(--text);
    }
  }
`;

const ListWrapper = styled.div`
  flex: 1;
  overflow-y: auto;
  padding-top: 6px;
  scroll-padding-top: 8px;
`;

const Note = styled.p`
  padding: 14px 4px 4px;
  font-size: 13px;
  color: var(--text-3);
`;

export { MonthlyListContainer, ListHeader, MonthName, SearchField, ListWrapper, Note };
