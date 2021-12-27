import { Greeter } from '/dist-gh-pages/common/Greeter/index.js';

function GreeterUse() {
}

GreeterUse.say = function() {
	const gr = new Greeter('Dude');
	return gr.greet();
};

export { GreeterUse };