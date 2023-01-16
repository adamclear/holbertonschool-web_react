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

	it('Notifications renders properly when displayDrawer=false', () => {
		const wrapper = shallow(<Notifications />);
		const menuItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('className') === 'menuItem');
		const notificationsItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('className') === 'Notifications');
		expect(menuItem.length).toBe(1);
		expect(notificationsItem.length).toBe(0);
	});

	it('Notifications renders properly when displayDrawer=true', () => {
		const wrapper = shallow(<Notifications displayDrawer={true}/>);
		const menuItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('className') === 'menuItem');
		const notificationsItem = wrapper
			.findWhere(n => n.prop('id') === 'notificationDiv')
			.findWhere(n => n.prop('className') === 'Notifications');
		expect(menuItem.length).toBe(1);
		expect(notificationsItem.length).toBe(1);
	});

	it('Notifications renders 3 NotificationItem elements', () => {
		const wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.find('NotificationItem').length).toBe(3);
	});

	it('Notifications renders proper string', () => {
		const wrapper = shallow(<Notifications displayDrawer={true}/>);
		expect(wrapper.find(
			'NotificationItem')
			.first().props().value).toEqual('New course available');
	});
});