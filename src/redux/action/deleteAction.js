export const DELETE = 'DELETE';

export const delete_user_inputText = id => {
  return {
    type: DELETE,
    id,
  };
};
