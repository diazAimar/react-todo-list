import React, { useState } from 'react';

export default function TodoForm() {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
  };

  const handleTextChange = (e) => {
    let task = e.target.value;
    if (task === '') {
      setBtnDisabled(true);
      setMessage('');
    } else if (task !== '' && task.length < 4) {
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
        className="flex w-full lg:w-5/6 xl:w-8/12 2xl:w-9-12 todo-list mx-auto lg:px-14 mt-14 birder"
        onSubmit={handleSubmit}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label max-w-7xl">
            <span className="label-text">Add a New Todo</span>
          </label>
          <input
            type="text"
            onChange={handleTextChange}
            id="newTodo"
            name="newTodo"
            placeholder="Type Here (e.g. 'Study Math')"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {!btnDisabled ? (
          <button type="submit" className="ml-10 mt-auto btn h-full align-bottom">
            Add Task
          </button>
        ) : (
          <div className="ml-10 mt-auto message h-full align-bottom">
            <p>{message}</p>
          </div>
        )}
      </form>
    </>
  );
}
