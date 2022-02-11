import { CHAT } from '../action/inputChatAction';

const initialState = {
  chat: [],
};

export const inputReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === CHAT) {
    return {
      chat: [...newState.chat, action.chatList],
    };
  } else {
    return state;
  }
};
