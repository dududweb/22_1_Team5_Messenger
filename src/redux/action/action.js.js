export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const CHAT = 'CHAT';

let id = 1;

export const add_loginUser_info = userInputData => {
  return {
    type: LOGIN,
    user: {
      id: id++,
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

export const add_user_inputText = userInputData => {
  return {
    type: CHAT,
    chatList: userInputData,
  };
};
