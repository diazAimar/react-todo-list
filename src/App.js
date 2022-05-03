import Header from './components/layout/Header';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import TodoFinished from './components/todo/TodoFinished';
import { TodoProvider } from './context/TodoContext';
import { success } from 'daisyui/src/colors';
function App() {
  return (
    <TodoProvider>
      <div className="App px-6 mx-auto">
        <Header />
        <TodoForm />
        <TodoList />
      </div>
      <div className="mx-auto">
        <TodoFinished type={'finished'} />
        <TodoFinished type={'unfinished'} />
      </div>
    </TodoProvider>
  );
}

export default App;
