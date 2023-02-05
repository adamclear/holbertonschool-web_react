import courseReducer, { initialState } from "./courseReducer";
import {
	SELECT_COURSE,
	UNSELECT_COURSE,
	FETCH_COURSE_SUCCESS
} from '../actions/courseActionTypes';
import { fetchCourseSuccess } from "../actions/courseActionCreators";

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
		expect(courseReducer(initialState, {})).toEqual([]);
	});

	it('courseReducer returns correct info from FETCH_COURSE_SUCCESS', () => {
		expect(courseReducer(coursesDefault, { type: FETCH_COURSE_SUCCESS }))
			.toEqual(coursesFetched);
	});

	it('courseReducer returns correct info from SELECT_COURSE', () => {
		const fetchCourses = courseReducer(coursesDefault,
																			{ type: FETCH_COURSE_SUCCESS });
		expect(courseReducer(fetchCourses, { type: SELECT_COURSE, index: 3 }))
			.toEqual(reactSelected);
	});

	it('courseReducer returns correct info from UNSELECT_COURSE', () => {
		expect(courseReducer(reactSelected, { type: UNSELECT_COURSE, index: 3 }))
			.toEqual(coursesFetched);
	});
});