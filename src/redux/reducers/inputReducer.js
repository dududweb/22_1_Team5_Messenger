import { CHAT, DELETE } from '../action/inputChatAction';

const initialState = {
  chat: [],
};

export const inputReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === CHAT) {
    return {
      chat: [...newState.chat, action.chatList],
    };
  } else if (action.type === DELETE) {
    return { chat: state.chat.filter(chat => chat.id !== action.chatId) };
  } else {
    return state;
  }
};
