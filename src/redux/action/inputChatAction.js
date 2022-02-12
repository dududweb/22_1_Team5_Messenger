export const CHAT = 'CHAT';

let id = 1;

export const add_user_inputText = userInputData => {
  return {
    type: CHAT,
    chatList: {
      id: id++,
      chatList: userInputData,
    },
  };
};
