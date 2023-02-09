import notificationReducer, { initialState } from "./notificationReducer";
import {
	MARK_AS_READ,
	SET_TYPE_FILTER,
	NotificationTypeFilters,
	FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes'

describe ('notificationReducer', () => {
	const defaultNotifications = [
		{
			id: 1,
			type: 'default',
			value: 'New course available',
		},
		{
			id: 2,
			type: 'urgent',
			value: 'New resume available',
		},
		{
			id: 3,
			type: 'urgent',
			value: 'New data available',
		},
	];

	it('notificationReducer returns empty list w/ no action', () => {
		expect(notificationReducer(initialState, {})).toEqual(
			{ filter: 'DEFAULT', notifications: [] });
	});

	it('MARK_AS_READ returns correct info', () => {
		const result = {
			filter: initialState.filter,
			notifications: initialState.notifications.map((notification) => {
				if (notification.id === action.index) {
					return { ...notification, isRead: true };
				}
				return notification;
			})
		};
		expect(notificationReducer(initialState, { type: MARK_AS_READ, index: 1 }))
			.toEqual(result);
	});

	it('SET_TYPE_FILTER returns correct info', () => {
		const result = {
			filter: 'URGENT',
			notifications: initialState.notifications.map((notification) => {
				return { ...notification, isRead: false };
			})
		};
		expect(notificationReducer(initialState,
			{ type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT}))
			.toEqual(result);
	});

	it('FETCH_NOTIFICATION_SUCCESS returns correct info', () => {
		const result = {
			filter: initialState.filter,
			notifications: defaultNotifications.map((notification) => {
				return { ...notification, isRead: false };
			})
		};
		expect(notificationReducer(initialState,
			{ type: FETCH_NOTIFICATIONS_SUCCESS, data: defaultNotifications }))
			.toEqual(result);
	});
});