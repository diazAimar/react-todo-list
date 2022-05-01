import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TodoContext from '../../context/TodoContext';

export default function TodoForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const { todos, addTodo } = useContext(TodoContext);
  const [id, setId] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!btnDisabled) {
      const newTodo = {
        text: text,
      };
      newTodo.id = uuidv4();
      addTodo(newTodo);
      setText('');
      setId(id + 1);
      setBtnDisabled(true);
    } else {
      setMessage('Task must have at least 4 characters');
    }
  };

  const handleTextChange = (e) => {
    let task = e.target.value;
    if (task === '') {
      setBtnDisabled(true);
      setMessage('');
    } else if (task !== '' && task.trim().length < 4) {
      setBtnDisabled(true);
      setMessage('Task must have at least 4 characters');
    } else {
      setBtnDisabled(false);
      setMessage('');
    }
    setText(task);
  };

  return (
    <>
      <form
        className="flex flex-col sm:flex-row w-full lg:w-5/6 xl:w-8/12 2xl:w-9-12 todo-list mx-auto lg:px-14 mt-14 p-5 "
        onSubmit={handleSubmit}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label max-w-7xl">
            <span className="label-text">Add a New Todo</span>
          </label>
          <input
            type="text"
            onChange={handleTextChange}
            value={text}
            placeholder="Type Here (e.g. 'Study Math')"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {!btnDisabled ? (
          <button
            type="submit"
            className="mt-5 btn w-1/4 sm:w-auto sm:mt-auto sm:ml-10 align-bottom "
          >
            Add Task
          </button>
        ) : (
          <div className="mt-5 sm:mt-auto ml-10 message h-full align-bottom">
            <p>{message}</p>
          </div>
        )}
      </form>
    </>
  );
}
