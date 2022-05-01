import TodoItem from './TodoItem';
import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';

export default function TodoList() {
  const { todos } = useContext(TodoContext);
  // console.log([todos]);
  return (
    <div
      className="w-full lg:w-5/6 xl:w-8/12 2xl:w-9-12 todo-list mx-auto rounded-3xl p-5 lg:p-14 shadow text-sm mt-14"
      id="todo-list"
    >
      <h1 className="text-2xl">Todo List: </h1>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
}
