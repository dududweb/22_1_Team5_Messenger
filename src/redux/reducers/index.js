import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { inputReducer } from './inputReducer';
import { deleteReducer } from './deleteReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  input: inputReducer,
  delete: deleteReducer,
});

export default rootReducer;
