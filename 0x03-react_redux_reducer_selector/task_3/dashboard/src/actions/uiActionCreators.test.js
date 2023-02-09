import { Login, Logout,
	displayNotificationDrawer,
	hideNotificationDrawer,
	loginSuccess, loginFailure, loginRequest } from './uiActionCreators';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe('Login request', () => {
	afterEach(() => {
		fetchMock.restore();
	});

	it('loginSuccess returns correct info', async () => {
		fetchMock.getOnce('./login-success.json', { body: { status: 'ok' } });
		const store = mockStore();
		const email = 'test@test.com'
		const password = 'testpass'
		const successTest = [
			Login(email, password),
			loginSuccess()
		];
		await store.dispatch(loginRequest(email, password));
		expect(store.getActions()).toEqual(successTest);
	});

	it('loginFailure returns correct info', async () => {
		fetchMock.getOnce('./login-success.json', { body: { status: 'error' } });
		const store = mockStore();
		const email = 'test@test.com'
		const password = 'testpass'
		const successTest = [
			Login(email, password),
			loginFailure()
		];
		await store.dispatch(loginRequest(email, password));
		expect(store.getActions()).toEqual(successTest);
	});
});