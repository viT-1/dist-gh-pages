import { greetText } from './Greeter-conf';

function Greeter(message) {
	this.greeting = message | greetText;
}

Greeter.prototype.greet = function () {
	return `${greetText}, ${this.greeting}`;
};

export { Greeter };
