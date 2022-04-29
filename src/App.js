import Header from './components/layout/Header';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import { TodoProvider } from './context/TodoContext';
function App() {
  return (
    <TodoProvider>
      <div className="App px-6 mx-auto">
        <Header />
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
