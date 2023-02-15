import notificationReducer, { initialState } from "./notificationReducer";
import {
	MARK_AS_READ,
	SET_TYPE_FILTER,
	NotificationTypeFilters,
	FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';
import { Map } from 'immutable';

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

	const fetchedNotifications = {
		notifications: {
			'1': {
				id: 1,
				type: 'default',
				value: 'New course available',
				isRead: false
			},
			'2': {
				id: 2,
				type: 'urgent',
				value: 'New resume available',
				isRead: false
			},
			'3': {
				id: 3,
				type: 'urgent',
				value: 'New data available',
				isRead: false
			},
		}
	};

	it('notificationReducer returns empty list w/ no action', () => {
		expect(notificationReducer(initialState, {})).toEqual(initialState);
	});

	it('FETCH_NOTIFICATION_SUCCESS returns correct info', () => {
		expect(notificationReducer(initialState,
			{ type: FETCH_NOTIFICATIONS_SUCCESS, data: defaultNotifications }))
			.toEqual(fetchedNotifications);
	});

	it('MARK_AS_READ returns correct info', () => {
		const fetchNotifs = notificationReducer(initialState,
			{ type: FETCH_NOTIFICATIONS_SUCCESS, data: defaultNotifications });
		const markedNotif = {
			notifications: {
				'1': {
					id: 1,
					type: 'default',
					value: 'New course available',
					isRead: true
				},
				'2': {
					id: 2,
					type: 'urgent',
					value: 'New resume available',
					isRead: false
				},
				'3': {
					id: 3,
					type: 'urgent',
					value: 'New data available',
					isRead: false
				},
			}
		};
		expect(notificationReducer(fetchNotifs, { type: MARK_AS_READ, index: 1 }).toJS())
			.toEqual(markedNotif);
	});

	it('SET_TYPE_FILTER returns correct info', () => {
		const result = Map({ notifications: [], filter: 'URGENT' });
		expect(notificationReducer(initialState,
			{ type: SET_TYPE_FILTER, filter: NotificationTypeFilters.URGENT}))
			.toEqual(result);
	});
});