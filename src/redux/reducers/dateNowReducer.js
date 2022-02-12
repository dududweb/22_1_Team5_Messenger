import { DATE_NOW } from '../action/dateNowAction';

const initialState = [
  {
    date: '',
  },
];

export const dateNowReducer = (state = initialState, action) => {
  if (action.type === DATE_NOW) {
    return state.concat(action.date);
  } else {
    return state;
  }
};
