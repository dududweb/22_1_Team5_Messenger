export const LOGIN = 'LOGIN';
export const UPLOAD = 'UPLOAD';

export const add_loginUser_info = userInputData => {
  return {
    type: LOGIN,
    user: {
      userEmail: userInputData.userEmail,
      nickname: userInputData.nickname,
    },
  };
};

export const add_ProfileImage = url => ({
  type: UPLOAD,
  profileImage: url,
});
