import { Greeter } from '#common/Greeter';
function GreeterUse() {
}

// static class method (alternative)
GreeterUse.say = function(greetTarget) {
	const gr = new Greeter(greetTarget);
	return gr.greet();
};

export { GreeterUse };