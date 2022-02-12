import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { inputReducer } from './inputReducer';
import { dateNowReducer } from './dateNowReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  input: inputReducer,
  getdate: dateNowReducer,
});

export default rootReducer;
