import TodoItem from './TodoItem';
import { FaChevronDown } from 'react-icons/fa';
import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';

export default function TodoFinished() {
  const { finishedTodos } = useContext(TodoContext);
  return (
    finishedTodos.length > 0 && (
      <div className="w-full lg:w-5/6 xl:w-8/12 2xl:w-9-12 p-5 lg:p-14 shadow text-sm mt-14 mx-auto">
        <p className="inline text-xl pb-6">Finished tasks</p>
        <ul className="mt-5 bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
          {finishedTodos.map((todo) => (
            <li className="px-6 py-2 border-b bg-green-300 border-gray-200 w-full" key={todo.id}>
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
