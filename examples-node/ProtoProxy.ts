'use strict';
debugger;

const MyWrapper = function () {
	debugger;
} as {
	new (): any
	(): void
};

Object.setPrototypeOf(MyWrapper.prototype, new Proxy(MyWrapper.prototype, {
	get (target, prop, receiver) {
		debugger;
		const result = Reflect.get(target, prop, receiver);
		debugger;
		return result;
	},
	set (target, prop, value, receiver) {
		debugger;
		const result = Reflect.defineProperty(receiver, prop, {
			value,
			enumerable: true,
			configurable: true,
			writable: true
		});
		debugger;
		return result;
	},
	defineProperty (target, prop, descriptor) {
		debugger;
		const result = Reflect.defineProperty(target, prop, descriptor);
		debugger;
		return result;
	}
	
}));

class MyClass extends MyWrapper {
	someProp: number
	extraProp = 321;
	constructor () {
		super();
		this.someProp = 123;
		debugger;
	}
};

// debugger;
const myInstance = new MyClass;
// debugger;


class MyNoConstructorClass extends MyWrapper {
	extraProp = 321;
};

// debugger;
const myNoConstructorInstance = new MyNoConstructorClass;
// debugger;


const MyProxyClass = new Proxy(MyNoConstructorClass, {
	construct (target, argumentsList, newTarget) {
		debugger;
		const result = Reflect.construct(target, argumentsList, newTarget);
		debugger;
		return result;
	},
});

debugger;
const myMyProxyClassInstance = new MyProxyClass;
debugger;