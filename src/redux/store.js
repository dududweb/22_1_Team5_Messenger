import { createStore } from 'redux';
import rootReducer from './reducers/index';
import { loginReducer } from './reducers/loginReducer';
import { inputReducer } from './reducers/inputReducer';

export const store = createStore(rootReducer);
