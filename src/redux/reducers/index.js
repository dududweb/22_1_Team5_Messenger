import { combineReducers } from 'redux';

import { reducer, reducer2 } from './reducer';

const rootReducer = combineReducers({
  reducer,
  reducer2,
});

export default rootReducer;
