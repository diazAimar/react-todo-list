import { useContext } from 'react';
import TodoContext from '../../context/TodoContext';

export default function TodoFinished({ type }) {
  const { finishedTodos, unfinishedTodos } = useContext(TodoContext);
  const bgColor = type === 'finished' ? 'bg-green-300' : 'bg-red-300';
  const arr = type === 'finished' ? finishedTodos : unfinishedTodos;
  return (
    finishedTodos.length > 0 && (
      <div className="w-full lg:w-5/6 xl:w-8/12 2xl:w-9-12 p-5 lg:p-14 shadow text-sm mx-auto">
        <p className="inline text-xl pb-6">
          {type.charAt(0).toUpperCase()}
          {type.slice(1)} tasks
        </p>
        <ul className="mt-5 bg-white rounded-lg border border-gray-200 w-96 text-gray-900">
          {arr.map((todo) => (
            <li className={`${bgColor} px-6 py-2 border-b border-gray-200 w-full`} key={todo.id}>
              {todo.text}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
