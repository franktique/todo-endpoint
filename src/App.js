import './App.css';
import {TodoProvider} from './context/TodoProvider'
import TodoList from './components/TodoList'


function App() {


  console.log('intentio')
  return (
    <TodoProvider>
      <div className="App">
          <TodoList/>
      </div>
    </TodoProvider>
  );

}

export default App;
