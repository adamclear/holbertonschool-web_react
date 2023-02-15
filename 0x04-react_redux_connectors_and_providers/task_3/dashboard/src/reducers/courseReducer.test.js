import courseReducer, { initialState } from "./courseReducer";
import {
	SELECT_COURSE,
	UNSELECT_COURSE,
	FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';
import { setIn } from 'immutable';

describe ('courseReducer', () => {
	const coursesDefault = [
		{ id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 }
	];
	const coursesFetched = [
		{ id: 1, name: "ES6", credit: 60, isSelected: false },
    { id: 2, name: "Webpack", credit: 20, isSelected: false },
    { id: 3, name: "React", credit: 40, isSelected: false }
	];
	const reactSelected = [
		{ id: 1, name: "ES6", credit: 60, isSelected: false },
    { id: 2, name: "Webpack", credit: 20, isSelected: false },
    { id: 3, name: "React", credit: 40, isSelected: true }
	];

	it('courseReducer returns empty list w/ no action', () => {
		expect(courseReducer(initialState, {})).toEqual(initialState);
	});

	it('courseReducer returns correct info from FETCH_COURSE_SUCCESS', () => {
		expect(courseReducer(initialState, { type: FETCH_COURSE_SUCCESS,
			data: coursesDefault })).toEqual(coursesNormalizer(coursesFetched));
	});

	it('courseReducer returns correct info from SELECT_COURSE', () => {
		expect(courseReducer(initialState, { type: SELECT_COURSE, courseId: 3 }))
			.toEqual(setIn(initialState, [3, 'isSelected'], true));
	});

	it('courseReducer returns correct info from UNSELECT_COURSE', () => {
		expect(courseReducer(initialState, { type: UNSELECT_COURSE, courseId: 3 }))
			.toEqual(setIn(initialState, [3, 'isSelected'], false));
	});
});