export const DELETE = 'DELETE';

let id = 1;

export const delete_user_inputText = id => {
  return {
    type: DELETE,
    id,
  };
};
