import { combineReducers } from 'redux';
import { reducer } from './reducer';
import { inputReducer } from './inputReducer';

const rootReducer = combineReducers({
  reducer,
  inputReducer,
});

export default rootReducer;
