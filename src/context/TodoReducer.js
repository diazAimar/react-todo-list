const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: action.payload,
      };
    case 'FINISH_TODO':
      return {
        ...state,
        // todos: action.payload.todos,
        finishedTodos: action.payload,
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: action.payload,
      };
    case 'SET_UNFINISHED_TODOS':
      return {
        ...state,
        unfinishedTodos: action.payload,
      };
    default:
      return state;
  }
};

export default todoReducer;
