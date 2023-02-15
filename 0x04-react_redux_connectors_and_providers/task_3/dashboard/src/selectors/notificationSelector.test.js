import { 
	filterTypeSelected,
	getNotifications,
	getUnreadNotifications } from "./notificationSelector";
import { Map } from 'immutable';
import notificationReducer, { initialState } from '../reducers/notificationReducer';
import {
	FETCH_NOTIFICATIONS_SUCCESS
} from '../actions/notificationActionTypes';

describe('notificationSelectors', () => {
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

	it('filterTypeSelected returns correct info', () => {
		const state = Map(notificationReducer(initialState, { }));
		expect(filterTypeSelected(state)).toEqual(initialState.get('filter'));
	});

	it('getNotifications returns correct info', () => {
		const state = notificationReducer(initialState,
			{ type: FETCH_NOTIFICATIONS_SUCCESS, data: defaultNotifications });
		expect(getNotifications(state)).toEqual(state.notifications);
	});

	it('getUnreadNotifications returns correct info', () => {
		const state = notificationReducer(initialState,
			{ type: FETCH_NOTIFICATIONS_SUCCESS, data: defaultNotifications });
		expect(getUnreadNotifications(state).toJS()).toEqual(getNotifications(state));
	});
})