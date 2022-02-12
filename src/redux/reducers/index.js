import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { inputReducer } from './inputReducer';
import { deleteReducer } from './deleteReducer';
import { dateNowReducer } from './dateNowReducer';

const rootReducer = combineReducers({
  login: loginReducer,
  input: inputReducer,
  delete: deleteReducer,
  getdate: dateNowReducer,
});

export default rootReducer;
