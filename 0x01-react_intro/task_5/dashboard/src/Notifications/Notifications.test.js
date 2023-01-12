import Notifications from './Notifications';
import React from 'react';
import { shallow } from 'enzyme';

describe('Notifications', () => {
	it('Notifications renders w/o crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	});

	it('Notifications renders 3 list items', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('li').length).toBe(3);
	});

	it('Notifications renders proper string', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
	});
});