import { defaultTarget, greetText } from './Greeter-conf.js';

function Greeter(target) {
	this.greetTarget = target || defaultTarget;
}

Greeter.prototype.greet = function () {
	return `${greetText}, ${this.greetTarget}`;
};

export { Greeter };