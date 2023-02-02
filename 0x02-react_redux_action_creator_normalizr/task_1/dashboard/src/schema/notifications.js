import notifs from '../../notifications.json';
import { schema, normalize } from 'normalizr';

export default function getAllNotificationsByUser(userId) {
	return notifs.filter((notif) => notif.author.id === userId)
		.map((notif) => notif.context);
}

const user = new schema.Entity('users');

const message = new schema.Entity('messages', {}, {
	idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
	author: user,
	context: message,
});

export const normalizedNotifs = normalize(notifs, [notification]);