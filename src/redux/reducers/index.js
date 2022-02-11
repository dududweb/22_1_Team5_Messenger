import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { inputReducer } from './inputReducer';

const rootReducer = combineReducers({
  loginReducer,
  inputReducer,
});

export default rootReducer;
