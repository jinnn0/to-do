import styled, { css, keyframes } from 'styled-components';
import { IconButton } from '../../styles/shared';

const enter = keyframes`
  from { opacity: 0; transform: translateY(6px); }
  to { opacity: 1; transform: none; }
`;

const Delete = styled(IconButton)`
  flex-shrink: 0;
  opacity: 0;

  &:hover {
    background: var(--danger-soft);
    color: var(--danger);
  }

  &:focus-visible {
    opacity: 1;
  }

  /* Touch screens can't hover, so keep it visible there. */
  @media (hover: none) {
    opacity: 1;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: ${(p) => (p.$compact ? '10px 8px 10px 12px' : '12px 10px 12px 14px')};
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  box-shadow: var(--shadow-sm);
  animation: ${enter} 0.32s ease-out both;
  animation-delay: calc(var(--i, 0) * 30ms);
  transition: border-color 0.15s, box-shadow 0.15s;

  & + & {
    margin-top: 8px;
  }

  &:hover {
    border-color: var(--border-strong);
    box-shadow: var(--shadow);
  }

  &:hover ${Delete} {
    opacity: 1;
  }
`;

// A round checkbox in the tag's colour; filled with a tick when done.
const Check = styled.button`
  flex-shrink: 0;
  width: 20px;
  height: 20px;
  display: grid;
  place-items: center;
  border: 2px solid ${(p) => p.$color};
  border-radius: 50%;
  background: transparent;
  color: white;
  transition: background-color 0.15s, transform 0.1s;

  svg {
    font-size: 12px;
    stroke-width: 3.5;
    opacity: 0;
    transform: scale(0.6);
    transition: opacity 0.15s, transform 0.15s;
  }

  &:hover {
    background: color-mix(in srgb, ${(p) => p.$color} 15%, transparent);
  }

  &:active {
    transform: scale(0.9);
  }

  &[aria-checked='true'] {
    background: ${(p) => p.$color};

    svg {
      opacity: 1;
      transform: none;
    }
  }
`;

const Body = styled.div`
  flex: 1;
  min-width: 0;
`;

const Task = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.4;
  overflow-wrap: anywhere;
  transition: color 0.15s;

  ${(p) =>
    p.$completed &&
    css`
      color: var(--text-3);
      text-decoration: line-through;
    `}
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 4px 10px;
  margin-top: 2px;
  font-size: 12px;
  color: var(--text-3);
`;

const When = styled.time`
  ${(p) =>
    p.$overdue &&
    css`
      color: var(--danger);
      font-weight: 500;
    `}
`;

const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
`;

const Dot = styled.span`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(p) => p.$color};
`;

export { Item, Check, Body, Task, Meta, When, Tag, Dot, Delete };
