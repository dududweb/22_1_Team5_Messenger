import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { inputReducer } from './inputReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  input: inputReducer,
});

export default rootReducer;
