import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { reducer } from './reducers/reducer';
import { inputReducer } from './reducers/inputReducer';

export const store = createStore(reducer);
