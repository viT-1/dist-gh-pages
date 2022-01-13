import { Greeter } from '../Greeter/index.js';

const GreeterUse = {
	say(greetTarget) {
		const gr = new Greeter(greetTarget);
		return gr.greet();
	},
};

export { GreeterUse };
