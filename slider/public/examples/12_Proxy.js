debugger;

const MyFn = function () {
	debugger;
};

console.log('\n --- construct proxy --- \n');

const MyConstructor = new Proxy(MyFn, {
	get (target, propName, receiver) {
		debugger;
		console.log('.get: ', propName);
		return Reflect.get(target, propName, receiver);
	},
	construct (target, argumentsList, newTarget) {
		debugger;
		console.log('.construct invocation');
		const result = Reflect.construct(target, argumentsList, newTarget);
		debugger;
		return result;
	}
});

debugger;

const proxyInstance = new MyConstructor;

debugger;
