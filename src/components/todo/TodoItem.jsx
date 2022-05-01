import { FaBan, FaCheck, FaTimes } from 'react-icons/fa';
import TodoContext from '../../context/TodoContext';
import { useContext } from 'react';

export default function TodoItem({ todo }) {
  const { finishTodo, deleteTodo } = useContext(TodoContext);
  return (
    <div className="flex justify-between items-center text-xl my-2">
      <div className="py-2 mr-6">
        <div className="inline-flex items-center rounded-full p-2 shadow text-sm">
          <span className="inline-flex px-6">{todo.text}</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-20">
        <button className="icon" onClick={() => finishTodo(todo)}>
          <FaCheck color="#1f2937" />
        </button>
        <button className="icon" onClick={() => deleteTodo(todo)}>
          <FaTimes color="#1f2937" />
        </button>
        <button className="icon">
          <FaBan color="#1f2937" />
        </button>
      </div>
    </div>
  );
}
