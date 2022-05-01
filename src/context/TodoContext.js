import { createContext, useContext, useReducer } from 'react';
import todoReducer from './TodoReducer';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  /* Initial State */
  const initialState = {
    todos: [],
    finishedTodos: [],
    unfinishedTodos: [],
  };
  const [state, dispatch] = useReducer(todoReducer, initialState);

  const addTodo = (newTodo) => {
    // console.log(newTodo);
    dispatch({
      type: 'ADD_TODO',
      payload: [newTodo, ...state.todos],
    });
  };

  const finishTodo = (todo) => {
    if (state.finishedTodos.filter((actTodo) => todo.id === actTodo.id).length > 0) {
      console.log('ese todo ya se encuentra terminado');
    } else {
      const finishedTodo = state.todos.filter((actTodo) => todo.id === actTodo.id)[0];
      dispatch({
        type: 'FINISH_TODO',
        payload: [finishedTodo, ...state.finishedTodos],
      });
    }
  };

  return (
    <TodoContext.Provider
      value={{
        todos: state.todos,
        finishedTodos: state.finishedTodos,
        unfinishedTodos: state.unfinishedTodos,
        finishTodo,
        addTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContext;
