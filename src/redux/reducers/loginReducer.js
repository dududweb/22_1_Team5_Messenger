import { LOGIN, LOGOUT } from '../action/loginAction';

const initialState = {
  userinfo: {
    userEmail: '',
    nickname: '',
  },
};

export const loginReducer = (state = initialState, action) => {
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
