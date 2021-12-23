import { Greeter } from '/dist-gh-pages/common/Greeter/index.js';

function GreeterUse() {
}

GreeterUse.say = function() {
	const gr = new Greeter('world');
	return gr.greet();
};

export { GreeterUse };