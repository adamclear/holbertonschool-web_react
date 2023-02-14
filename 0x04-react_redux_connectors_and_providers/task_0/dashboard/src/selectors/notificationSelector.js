import { Map, getIn } from 'immutable';

export const filterTypeSelected = state => state.get('filter');
export const getNotifications = state => getIn(state, ['notifications'], Map());
export const getUnreadNotifications = state => {
	const notifs = getNotifications(state);
	return Map(notifs).filter((notif) => !notif.isRead);
}