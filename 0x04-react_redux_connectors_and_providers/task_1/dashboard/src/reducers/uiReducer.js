import { Map } from 'immutable';
import {
	LOGIN,
	LOGOUT,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes';

export const initialState = Map({
	isNotificationDrawerVisible: false,
	isUserLoggedIn: false,
	user: Map({})
});

export default function uiReducer(state = initialState, action) {
	switch (action.type) {
		case LOGOUT:
			return state.set('isUserLoggedIn', false);
		case LOGIN_SUCCESS:
			return state.merge({
				isUserLoggedIn: true,
				user: Map(action.user)
			});
		case LOGIN_FAILURE:
			return state.merge({
				isUserLoggedIn: false,
				error: action.error
			});
		case DISPLAY_NOTIFICATION_DRAWER:
			return state.set('isNotificationDrawerVisible', true);
		case HIDE_NOTIFICATION_DRAWER:
			return state.set('isNotificationDrawerVisible', false);
		default:
			return state;
	}
}