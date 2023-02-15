import { markAsRead, setNotificationFilter } from "./notificationActionCreators";

describe('notificationActionCreators', () => {
	it('markAsRead returns correct info', () => {
		const markTest = {
			type: 'MARK_AS_READ',
			index: 1
		};
		expect(markAsRead(1)).toEqual(markTest);
	});

	it('setNotificationFilter returns correct info', () => {
		const setTest = {
			type: 'SET_TYPE_FILTER',
			filter: 'DEFAULT'
		};
		expect(setNotificationFilter('DEFAULT')).toEqual(setTest);
	});
})