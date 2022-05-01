import TodoItem from './TodoItem';
import { FaChevronDown } from 'react-icons/fa';
import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';

export default function TodoFinished() {
  const { finishedTodos } = useContext(TodoContext);
  return (
    finishedTodos.length > 0 && (
      <div className="w-full lg:w-5/6 xl:w-8/12 2xl:w-9-12 todo-list rounded-3xl p-5 lg:p-14 shadow text-sm mt-14 mx-auto">
        <p className="flex items-center">
          Finished tasks: <FaChevronDown className="ml-5" />
        </p>
        {finishedTodos.map((todo) => (
          <p key={todo.id}>{todo.text}</p>
        ))}
      </div>
    )
  );
}
