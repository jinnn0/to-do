import styled from 'styled-components';
import { Heading } from '../../styles/shared';

const WeeklyList = styled.div`
  width: 100%;
  overflow-y: scroll;
  /* to prevent box-shadow cut off on the left/right edge due to position absolute */
  padding: 0 4.5px;

  /* make horizontal scroll bar transparent */
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 900px) {
    display: flex;
    position: absolute;
    overflow-x: scroll;
    width: calc(75% - 50px);
    /* fix for firefox */
    scrollbar-width: none;
  }
`;

const ListHeading = styled(Heading)`
  span {
    font-weight: lighter;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.171);
    margin-left: 0.4rem;
  }

  .date-ordinal {
    margin-left: 0;
  }
`;

export { WeeklyList, ListHeading };
