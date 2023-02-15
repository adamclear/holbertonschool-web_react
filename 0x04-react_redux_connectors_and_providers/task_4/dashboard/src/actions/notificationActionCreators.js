import { 
	FETCH_NOTIFICATIONS_SUCCESS,
	MARK_AS_READ,
	SET_TYPE_FILTER } from "./notificationActionTypes";
import { bindActionCreators } from "redux";

export function markAsRead(index) {
	return {
		type: MARK_AS_READ,
		index
	};
}

export function setNotificationFilter(filter) {
	return {
		type: SET_TYPE_FILTER,
		filter
	};
}

export function fetchNotificationsSuccess(notifications) {
	return {
		type: FETCH_NOTIFICATIONS_SUCCESS,
		notifications
	}
}

export const notificationActions = {
	markAsRead,
	setNotificationFilter,
	fetchNotificationsSuccess
}

export const boundNotificationActions = (dispatch) => bindActionCreators(
	notificationActions, dispatch)