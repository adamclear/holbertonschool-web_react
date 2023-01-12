import { expect } from 'chai';
import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

test('getFullYear returns correct year', () => {
	expect(getFullYear()).toBe(2023);
});

test('getFooterCopy returns correct string (false)', () => {
	expect(getFooterCopy(0)).toBe('Holberton School main dashboard');
});

test('getFooterCopy returns correct string (true)', () => {
	expect(getFooterCopy(1)).toBe('Holberton School');
});

test('getLatestNotification returns correct string', () => {
	expect(getLatestNotification()).toBe('<strong>Urgent requirement</strong> - complete by EOD');
});