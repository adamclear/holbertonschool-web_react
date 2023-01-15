import React from 'react';
import Notifications from './Notifications';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('Notifications', () => {
	it('Notifications renders w/o crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	});

	it('Notifications renders 3 NotificationItem elements', () => {
		const wrapper = shallow(<Notifications />);
		const notifItem = wrapper.find('NotificationItem');
		expect(notifItem.exists()).toBe(true);
		expect(notifItem.length).toBe(3);
	});

	it('Notifications renders proper string', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('NotificationItem').first().props().value).toBe('New course available');
	});
});