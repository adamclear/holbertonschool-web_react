import { selectCourse, unSelectCourse } from "./courseActionCreators";

describe('courseActionCreators', () => {
	it('selectCourse returns correct info', () => {
		const selectTest = {
			type: "SELECT_COURSE",
			payload: 1
		};
		expect(selectCourse(1)).toEqual(selectTest);
	});

	it('unSelectCourse returns correct info', () => {
		const unSelectTest = {
			type: "UNSELECT_COURSE",
			payload: 1
		};
		expect(unSelectCourse(1)).toEqual(unSelectTest);
	});
});