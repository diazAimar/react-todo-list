import { FaBan, FaCheck } from 'react-icons/fa';
export default function TodoItem({ todo }) {
  return (
    <div className="flex justify-between items-center text-xl my-2">
      <div className="py-2 mr-6">
        <div className="inline-flex items-center rounded-full p-2 shadow text-sm">
          <span className="inline-flex px-6">{todo.text}</span>
        </div>
      </div>
      <div className="flex items-center">
        <button className="mr-3">
          <FaCheck color="#020202" />
        </button>
        <button className="">
          <FaBan />
        </button>
      </div>
    </div>
  );
}
