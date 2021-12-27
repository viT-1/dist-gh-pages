import { Greeter } from '#common/Greeter';

function GreeterUse() {
}

// static class method (alternative)
GreeterUse.say = function() {
	const gr = new Greeter('Dude');
	return gr.greet();
};

export { GreeterUse };