export const CHAT = 'CHAT';
export const DELETE = 'DELETE';

let id = 1;
let date = '';

export const add_user_inputText = userInputData => {
  return {
    type: CHAT,
    chatList: {
      id: id++,
      chatList: userInputData,
    },
    date,
  };
};
export const add_user_inputText_delete = chatId => {
  return {
    type: DELETE,
    chatId,
  };
};
