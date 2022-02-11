import { LOGIN, LOGOUT } from '../action/action.js';

const initialState = {
  userinfo: {
    userEmail: '',
    nickname: '',
  },
};

export const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === LOGIN) {
    return {
      userinfo: [{ ...newState.userinfo }, action.user],
    };
  } else if (action.type === LOGOUT) {
    return {
      userinfo: [...state.todos.filter(todo => todo.id !== action.id)],
    };
  } else {
    return state;
  }
};
