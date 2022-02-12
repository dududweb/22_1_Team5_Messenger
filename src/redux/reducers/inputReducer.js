import { CHAT, DELETE, DATE_NOW } from '../action/inputChatAction';

const initialState = {
  chat: [],
  date: '',
};

export const inputReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === CHAT) {
    return {
      chat: [...newState.chat, action.chatList],
    };
  } else if (action.type === DELETE) {
    return { chat: state.chat.filter(chat => chat.id !== action.chatId) };
  } else if (action.type === DATE_NOW) {
    return {
      chat: [...newState.chat, action.date],
    };
  } else {
    return state;
  }
};
