import styled from 'styled-components';
import { colors } from '../../styles/GlobalStyle';
import { Select } from '../../styles/shared';

const SelectSortContainer = styled.div`
  width: 150px;
  display: flex;
`;

const SortByText = styled.span`
  margin-right: 0.5rem;
  font-size: 0.8rem;
  color: ${colors.lightBlack};
`;

const Sort = styled(Select)`
  width: 97px;
  font-weight: 500;
`;

export { SelectSortContainer, SortByText, Sort };
