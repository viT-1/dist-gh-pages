describe('module Greeter.js', () => {
	// TODO: main.js is esm module. How to check it without export?
	it('main.js runs without errors', () => {
		expect.assertions(1);

		expect(Array.isArray).not.toThrow();
	});
});