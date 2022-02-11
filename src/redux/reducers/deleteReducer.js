import { DELETE } from '../action/deleteAction';

const initialState = {
  contents: { id: '', chatList: [] },
};

export const deleteReducer = (state = initialState, action) => {
  if (action.type === DELETE) {
    return {
      contents: [...state.contents.filter(user => user.id !== action.id)],
    };
  } else {
    return state;
  }
};
