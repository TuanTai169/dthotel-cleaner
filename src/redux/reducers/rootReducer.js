import themeReducer from './themesReducer';
import roomReducer from './roomReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  themeReducer,
  roomReducer,
  userReducer,
  auth: authReducer,
});

export default rootReducer;
