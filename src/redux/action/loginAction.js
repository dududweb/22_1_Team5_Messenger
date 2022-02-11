export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const UPLOAD = 'UPLOAD';

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

export const add_ProfileImage = url => {
  return {
    type: UPLOAD,
    profileImage: url,
  };
};
