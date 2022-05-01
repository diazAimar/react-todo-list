import Header from './components/layout/Header';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import TodoFinished from './components/todo/TodoFinished';
import { TodoProvider } from './context/TodoContext';
function App() {
  return (
    <TodoProvider>
      <div className="App px-6 mx-auto">
        <Header />
        <TodoForm />
        <TodoList />
        <TodoFinished />
      </div>
    </TodoProvider>
  );
}

export default App;
