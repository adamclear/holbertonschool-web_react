import {
	LOGIN,
	LOGOUT,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	DISPLAY_NOTIFICATION_DRAWER,
	HIDE_NOTIFICATION_DRAWER
} from '../actions/uiActionTypes';

export const inititalState = {
	isNotificationDrawerVisible: false,
	isUserLoggedIn: false,
	user: {}
};

export default function uiReducer(state = inititalState, action) {
	switch (action.type) {
		case LOGOUT:
			return {
				...state,
				isUserLoggedIn: false,
			};
		case LOGIN_SUCCESS:
			return {
				...state,
				isUserLoggedIn: true,
				user: action.user,
			};
		case LOGIN_FAILURE:
			return {
				...state,
				isUserLoggedIn: false,
				error: action.error,
			};
		case DISPLAY_NOTIFICATION_DRAWER:
			return {
				...state,
				isNotificationDrawerVisible: true,
			};
		case HIDE_NOTIFICATION_DRAWER:
			return {
				...state,
				isNotificationDrawerVisible: false,
			};
		default:
			return state;
	}
}