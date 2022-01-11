import { Greeter } from '../Greeter/index.js';

function GreeterUse() {
}

// static class method (alternative)
GreeterUse.say = function() {
	const gr = new Greeter('Dude');
	return gr.greet();
};

export { GreeterUse };