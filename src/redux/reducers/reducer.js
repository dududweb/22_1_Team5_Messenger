import { LOGIN, LOGOUT, CHAT } from '../action/action.js';

const initialState = {
  userinfo: {
    userEmail: '',
    nickname: '',
    contents: [],
  },
};

export const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === LOGIN) {
    return {
      // 만약 다른 state 가 존재한다면 전개 연산 ...state 를 해야함
      // 하지만 현재 state 에는 todos 하나 뿐이라 todos 만 반환하면 됨
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

//==========

const initialState2 = {
  chat: [],
};

export const reducer2 = (state = initialState2, action) => {
  const newState = { ...state };

  if (action.type === CHAT) {
    return {
      // 만약 다른 state 가 존재한다면 전개 연산 ...state 를 해야함
      // 하지만 현재 state 에는 todos 하나 뿐이라 todos 만 반환하면 됨
      chat: [...newState.chat, action.chatList],
    };
  } else {
    return state;
  }
};
