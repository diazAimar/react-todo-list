import Header from './components/layout/Header';
import TodoForm from './components/todo/TodoForm';
import TodoList from './components/todo/TodoList';
import { useState } from 'react';
import TodoData from './data/todos';

function App() {
  const [todos, setTodos] = useState(TodoData);
  return (
    <div className="App px-6 mx-auto">
      <Header />
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
