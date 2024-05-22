
debugger;

const PrototypeChain = [{
	parent: true
}, {
	middle: true
}, {
	latest: true
}];

const MyConstructor = function () {};
MyConstructor.prototype.real = true;

debugger;

const accessorProxy = new Proxy(MyConstructor.prototype, {
	get (target, prop, receiver) {
		let result;
		PrototypeChain.reverse().forEach(current => {
			if (result === undefined) {
				result = Reflect.get(current, prop);
			}
		});
		return result;
	}
});

debugger;

Reflect.setPrototypeOf(MyConstructor.prototype, accessorProxy);

const myObject = new MyConstructor;


debugger;

console.log('myObject.real   : ', myObject.real);
console.log('myObject.latest : ', myObject.latest);
console.log('myObject.middle : ', myObject.middle);
console.log('myObject.parent : ', myObject.parent);

debugger;