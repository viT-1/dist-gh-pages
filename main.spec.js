import {
	describe,
	expect,
	it,
	jest,
} from '@jest/globals';
import { run } from './main.js';

describe('module main', () => {
	it('runs without errors', () => {
		expect.assertions(1);

		expect(run).not.toThrow();
	});

	it('should greet by console', () => {
		expect.assertions(1);

		const consoleSpy = jest.spyOn(global.console, 'log').mockImplementation(() => {});

		run();

		// eslint-disable-next-line jest/prefer-called-with
		expect(consoleSpy).toHaveBeenCalled();

		consoleSpy.mockClear();
	});
});
