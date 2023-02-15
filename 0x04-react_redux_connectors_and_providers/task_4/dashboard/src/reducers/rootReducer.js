import uiReducer from './uiReducer';
import courseReducer from './courseReducer';
import notificationReducer from './notificationReducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  ui: uiReducer,
	courses: courseReducer,
	notifications: notificationReducer
});