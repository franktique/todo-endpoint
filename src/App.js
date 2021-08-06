import { TodoProvider } from "./context/TodoProvider";
import TodoList from "./components/TodoList";
import { StyledAppContainer } from "./components/AppContainer/Styled";
import { useTodo } from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <StyledAppContainer>
        <TodoList useTodo={useTodo} />
      </StyledAppContainer>
    </TodoProvider>
  );
}

export default App;
