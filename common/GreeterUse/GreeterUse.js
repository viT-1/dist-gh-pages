import { Greeter } from '#common/Greeter.js';

function GreeterUse() {
}

GreeterUse.say = function() {
	const gr = new Greeter('world');
	return gr.greet();
};

export { GreeterUse };