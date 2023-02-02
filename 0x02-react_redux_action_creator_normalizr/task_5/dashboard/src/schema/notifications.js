import notifs from '../../notifications.json';
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
	idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
	author: user,
	context: message,
});

export const normalizedNotifs = normalize(notifs, [notification]);

export default function getAllNotificationsByUser(userId) {
	return Object.values(normalizedNotifs.entities.notifications)
		.filter((notif) => notif.author === userId)
		.map((notif) => normalizedNotifs.entities.messages[notif.context]);
}