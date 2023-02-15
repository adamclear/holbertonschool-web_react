import {LOGIN, LOGOUT, 
		DISPLAY_NOTIFICATION_DRAWER,
		HIDE_NOTIFICATION_DRAWER,
		LOGIN_SUCCESS, LOGIN_FAILURE} from './uiActionTypes';
import { bindActionCreators } from 'redux';
import { createAsyncThunk } from '@reduxjs/toolkit';

export function Login(email, password) {
	return {
		type: LOGIN,
		user: {
			email,
			password,
			isLoggedIn: true
		}
	};
}

export function Logout() {
	return {
		type: LOGOUT,
		user: {
			email: '',
			password: '',
			isLoggedIn: false
		}
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

export const loginRequest = createAsyncThunk(LOGIN, async (args, store) => {
	const response = await fetch('./login-success.json');
	if (response.status === 200) {
		store.dispatch(Login(args.email, args.password));
		return () => store.dispatch(loginSuccess());
	}
	else {
		return () => store.dispatch(loginFailure());
	}
});