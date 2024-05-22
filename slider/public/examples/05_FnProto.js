'use strict';

debugger;

console.log('\n --- constructor features --- \n');

const MyFn = function () { };

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MyFnProto = Object.getPrototypeOf(MyFn);

console.log('function prototype === Function.prototype',

	Object.getPrototypeOf(

		MyFn

	) ===

	Function.prototype

);

console.log('Function prototype === Function.prototype',

	Object.getPrototypeOf(

		Function

	) ===

	Function.prototype

);

console.log('Function.prototype prototype === Object.prototype',

	Object.getPrototypeOf(

		Function.prototype

	) ===

	Object.prototype

);

debugger;


console.log('\n --- constructor creation --- \n');

const Constructible = new Function();

// console.log(Object.getOwnPropertyDescriptors(Constructible))
// console.log(Object.getOwnPropertyDescriptors(Constructible.prototype))

const instanceNoName = new Constructible;

console.log('instance log no name  : ', instanceNoName);

Object.defineProperty(Constructible, 'name', {
	value: 'Constructible',
	configurable: true
});

console.log('instance log has name : ', instanceNoName);

Object.setPrototypeOf(Constructible, {
	constructor: Constructible
});

Object.defineProperty(Constructible.prototype, Symbol.toStringTag, {
	value: 'Constructible',
	// difference !
	// get () {return 'Constructible';}
});

const instanceWithName = new Constructible();

console.log('instance inspect name : ', instanceWithName);

debugger;

