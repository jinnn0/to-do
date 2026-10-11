import styled, { css } from 'styled-components';

const ListContainer = styled.section`
  padding: 12px 8px;
  border-radius: var(--radius);
  transition: background-color 0.3s;

  ${(p) =>
    p.$selected &&
    css`
      background: var(--accent-soft);
    `}
`;

const ListHeader = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 10px;
`;

const DateNumber = styled.span`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
`;

const DayName = styled.span`
  font-size: 13px;
  color: var(--text-3);
`;

const TodayBadge = styled.span`
  padding: 1px 8px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-text);
  font-size: 11px;
  font-weight: 600;
`;

export { ListContainer, ListHeader, DateNumber, DayName, TodayBadge };
