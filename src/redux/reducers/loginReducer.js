import { LOGIN, UPLOAD } from '../action/loginAction';

const initialState = {
  userinfo: {
    userEmail: '',
    nickname: '',
    profileImage: '',
  },
};

export const loginReducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === LOGIN) {
    return {
      userinfo: [{ ...newState.userinfo }, action.user],
    };
  } else if (action.type === UPLOAD) {
    return {
      userinfo: [{ ...newState.userinfo }, action.profileImage],
    };
  } else {
    return state;
  }
};
