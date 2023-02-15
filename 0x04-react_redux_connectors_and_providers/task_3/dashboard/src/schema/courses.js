import { normalize, schema } from 'normalizr';

const courses = new schema.Entity('courses');

export default function coursesNormalizer(data) {
	const normalizeData = normalize(data, [courses]);
	return normalizeData.entities.courses
}