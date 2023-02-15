import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import uiReducer, { initialState } from "./uiReducer";

describe('uiReducer', () => {
	it('uiReducer returns initialState with no action', () => {
		expect(uiReducer(initialState, {})).toEqual(initialState);
	});

	it('uiReducer returns initialState with SELECT_COURSE', () => {
		expect(uiReducer(initialState, {type: 'SELECT_COURSE'}))
			.toEqual(initialState);
	});

	it('uiReducer changes isNotif. to true w/DISPLAY_NOTIFICATION_DRAWER', () => {
		expect(uiReducer(initialState, {}).get('isNotificationDrawerVisible'))
			.toBe(false);
		const changeDrawer = {
			type: DISPLAY_NOTIFICATION_DRAWER,
		};
		const displayTrue = uiReducer(initialState, changeDrawer);
		expect(displayTrue.get('isNotificationDrawerVisible')).toBe(true);
	});
});