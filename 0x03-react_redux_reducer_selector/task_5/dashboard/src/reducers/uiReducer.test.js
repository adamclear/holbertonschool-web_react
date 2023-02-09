import uiReducer from "./uiReducer";
import { DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";
import { inititalState } from "./uiReducer";

describe('uiReducer', () => {
	it('uiReducer returns initialState with no action', () => {
		expect(uiReducer(inititalState, {})).toEqual(inititalState);
	});

	it('uiReducer returns initialState with SELECT_COURSE', () => {
		expect(uiReducer(inititalState, {type: 'SELECT_COURSE'}))
			.toEqual(inititalState);
	});

	it('uiReducer changes isNotif. to true w/DISPLAY_NOTIFICATION_DRAWER', () => {
		expect(uiReducer(inititalState, {}).get('isNotificationDrawerVisible'))
			.toBe(false);
		const changeDrawer = {
			type: DISPLAY_NOTIFICATION_DRAWER,
		};
		const displayTrue = uiReducer(inititalState, changeDrawer);
		expect(displayTrue.get('isNotificationDrawerVisible')).toBe(true);
	});
});