import { assert } from 'chai';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('Utils', () => {
	describe('getFullYear', () => {
		it('returns the correct year', () => {
			assert.equal(getFullYear(), new Date().getFullYear());
		});
	});

	describe('getFooterCopy', () => {
		it('returns the correct string (false)', () => {
			assert.equal(getFooterCopy(0), 'Holberton School main dashboard');
		});
		it('returns the correct string (true)', () => {
			assert.equal(getFooterCopy(1), 'Holberton School');
		});
	});

	describe('getLatestNotification', () => {
		it('returns the correct string', () => {
			assert.equal(getLatestNotification(),
			'<strong>Urgent requirement</strong> - complete by EOD');
		});
	});
});