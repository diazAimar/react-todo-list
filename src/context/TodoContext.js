import { createContext, useReducer } from 'react';
import todoReducer from './TodoReducer';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  /* Initial State */
  const initialState = {
    todos: [],
  };

  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (newTodo) => {
    dispatch({
      type: 'ADD_TODO',
      payload: newTodo,
    });
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
