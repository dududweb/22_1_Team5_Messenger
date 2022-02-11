import { LOGIN, LOGOUT, ADD_CHAT } from '../action/action.js';

const initialState = {
  userinfo: {
    userEmail: '',
    nickname: '',
    profileImg: '',
    contents: [],
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

const initialState2 = [{ id: 1, text: '' }];

export const reducer2 = (state = initialState2, action) => {
  switch (action.type) {
    case ADD_CHAT:
      return state.concat(action.chatList);
    default:
      return state;
  }
};
