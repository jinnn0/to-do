import SelectView from '../SelectView';
import SelectSort from '../SelectSort';
import AddTodo from '../AddTodo';
import { HeaderContainer, Row1, Row1_1, Row2Col1, Row2Col2 } from './style';

function Header({ title }) {
  return (
    <HeaderContainer>
      <Row1>
        <Row1_1>
          <h1 className="title">{title}</h1>
        </Row1_1>

        <div>
          <SelectView />
        </div>
      </Row1>

      <Row2Col1>
        <SelectSort />
      </Row2Col1>

      <Row2Col2>
        <AddTodo />
      </Row2Col2>
    </HeaderContainer>
  );
}

export default Header;
