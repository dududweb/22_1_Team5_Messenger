export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const ADD_CHAT = 'ADD_CHAT';

let id = 1;

export const add_loginUser_info = userInputData => {
  return {
    type: LOGIN,
    user: {
      userEmail: userInputData.userEmail,
      nickname: userInputData.nickname,
    },
  };
};

export const delete_todo = id => {
  return {
    type: LOGOUT,
    id,
  };
};

let nextId = 1;
export const add_user_inputText = userInputData => {
  return {
    type: ADD_CHAT,
    chatList: {
      id: nextId++,
      userInputData,
    },
  };
};
