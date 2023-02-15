import { 
	SELECT_COURSE,
	UNSELECT_COURSE,
	FETCH_COURSE_SUCCESS } from "./courseActionTypes";
import { bindActionCreators } from 'redux';

export const selectCourse = (index) => {
	return {
		type: SELECT_COURSE,
		payload: index
	};
}

export const unSelectCourse = (index) => {
	return {
		type: UNSELECT_COURSE,
		payload: index
	};
}

export const fetchCourseSuccess = (courses) => {
	return ({
    type: FETCH_COURSE_SUCCESS,
    data: courses
  });
}

export const courseActions = {
	selectCourse,
	unSelectCourse,
	fetchCourseSuccess
};

export const boundCourseActions = (dispatch) => bindActionCreators(
	courseActions, dispatch);