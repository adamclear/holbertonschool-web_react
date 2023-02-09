import {
	MARK_AS_READ,
	SET_TYPE_FILTER,
	NotificationTypeFilters,
	FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';
import { Map, merge } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications';

export const initialState = Map({
	notifications: [],
	filter: NotificationTypeFilters.DEFAULT
});

export default function notificationReducer(state = initialState, action) {
	switch (action.type) {
		case MARK_AS_READ:
			return Map(state).setIn(['notifications', action.index, 'isRead'], true);
		case SET_TYPE_FILTER:
			return state.set('filter', action.filter);
		case FETCH_NOTIFICATIONS_SUCCESS:
			return notificationsNormalizer(action.data.map(notification => (
				merge(notification, { isRead: false }))));
		default:
			return state;
	}
}