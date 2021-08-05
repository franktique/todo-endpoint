import { TodoProvider } from './context/TodoProvider';
import TodoList from './components/TodoList';
import { StyledAppContainer } from './components/AppContainer/Styled';

function App() {
  return (
    <TodoProvider>
      <StyledAppContainer>
        <TodoList />
      </StyledAppContainer>
    </TodoProvider>
  );
}

export default App;
