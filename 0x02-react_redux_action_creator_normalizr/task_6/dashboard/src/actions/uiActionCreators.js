import {LOGIN, LOGOUT, 
		DISPLAY_NOTIFICATION_DRAWER,
		HIDE_NOTIFICATION_DRAWER} from './uiActionTypes';
import { bindActionCreators } from 'redux';

export function Login(email, password) {
	return {
		type: LOGIN,
		user: {
			email,
			password
		}
	};
}

export function Logout() {
	return {
		type: LOGOUT
	};
}

export function displayNotificationDrawer() {
	return {
		type: DISPLAY_NOTIFICATION_DRAWER
	};
}

export function hideNotificationDrawer() {
	return {
		type: HIDE_NOTIFICATION_DRAWER
	};
}

export const uiActions = {
	Login,
	Logout,
	displayNotificationDrawer,
	hideNotificationDrawer
}

export const boundUiActions = (dispatch) => bindActionCreators(uiActions, dispatch);
