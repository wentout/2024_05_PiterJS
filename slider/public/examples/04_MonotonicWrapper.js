
debugger;

const MonotonicWrapper = function () {
	console.log('here', this);
	console.log(this.constructor.name);
	debugger;
};

MonotonicWrapper.prototype.someValue = 123;

class MyClass extends MonotonicWrapper { };

const instance1 = new MyClass;
const instance2 = new MyClass;

debugger;

MonotonicWrapper.prototype.anotherValue = 321;

console.log('check assitnment');
console.log(instance1.someValue);
console.log(instance2.someValue);

debugger;

instance1.someValue = 321;

console.log('check RE-assitnment');
console.log(instance1.someValue);
console.log(instance2.someValue);

debugger;

console.log('check initial value');
console.log(

	Object.getPrototypeOf // !!!
		(instance1).someValue
);

debugger;

console.log('check monotonous field added');
console.log(instance1.anotherValue);
console.log(instance2.anotherValue);

debugger;
