import { Login, Logout,
	displayNotificationDrawer,
	hideNotificationDrawer } from './uiActionCreators';

describe('uiActionCreators', () => {
	it('LOGIN returns correct info', () => {
		const email = 'test@test.com'
		const password = 'testpass'
		const loginTest = {
			type: 'LOGIN',
			user: {
				email,
				password
			}
		};
		expect(Login(email, password)).toEqual(loginTest);
	});

	it('LOGOUT returns correct info', () => {
		const logoutTest = {
			type: 'LOGOUT'
		};
		expect(Logout()).toEqual(logoutTest);
	});

	it('DISPLAY_NOTIFICATION_DRAWER returns correct info', () => {
		const displayTest = {
			type: 'DISPLAY_NOTIFICATION_DRAWER',
		};
		expect(displayNotificationDrawer()).toEqual(displayTest);
	});

	it('HIDE_NOTIFICATION_DRAWER returns correct info', () => {
		const hideTest = {
			type: 'HIDE_NOTIFICATION_DRAWER',
		};
		expect(hideNotificationDrawer()).toEqual(hideTest);
	});
});