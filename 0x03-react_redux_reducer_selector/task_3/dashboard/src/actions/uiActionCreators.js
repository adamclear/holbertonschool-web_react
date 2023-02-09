import {LOGIN, LOGOUT, 
		DISPLAY_NOTIFICATION_DRAWER,
		HIDE_NOTIFICATION_DRAWER,
		LOGIN_SUCCESS, LOGIN_FAILURE} from './uiActionTypes';
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

export function loginSuccess() {
	return {
		type: LOGIN_SUCCESS
	};
}

export function loginFailure() {
	return {
		type: LOGIN_FAILURE
	};
}

export function loginRequest(email, password) {
	return async function(dispatch) {
		dispatch(Login(email, password));
		const response = await fetch('./login-success.json');
		const json = await response.json();
		if (json.status === 'ok') {
			dispatch(loginSuccess());
		}
		else {
			dispatch(loginFailure());
		}
	};
}

export const uiActions = {
	Login,
	Logout,
	displayNotificationDrawer,
	hideNotificationDrawer,
	loginSuccess,
	loginFailure,
	loginRequest
}

export const boundUiActions = (dispatch) => bindActionCreators(uiActions, dispatch);
