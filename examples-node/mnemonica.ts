import { decorate, apply } from 'mnemonica';

debugger;

@decorate()
class MyDecoratedClass {
	field: number;
	constructor() {
		this.field = 123;
	}
}

debugger;
@decorate(MyDecoratedClass)
class MyDecoratedSubClass {
	sub_field: number;
	constructor() {
		this.sub_field = 321;
	}
}

debugger;
export const myDecoratedInstance = new MyDecoratedClass;
console.log(myDecoratedInstance);

debugger;
setTimeout(() => {

	debugger;

	const myDecoratedSubInstance = apply(myDecoratedInstance, MyDecoratedSubClass, [321]);
	console.log(myDecoratedSubInstance);

	debugger;

	console.log(myDecoratedInstance instanceof MyDecoratedClass);

	debugger;

	console.log(myDecoratedSubInstance instanceof MyDecoratedClass);
	console.log(myDecoratedSubInstance instanceof MyDecoratedSubClass);

	debugger;

	console.log(myDecoratedSubInstance.field);
	console.log(myDecoratedSubInstance.sub_field);

	debugger;
	// @ts-expect-error
	console.log('myDecoratedInstance.__timestamp__    : ', myDecoratedInstance.__timestamp__);

	debugger;
	// @ts-expect-error
	console.log('myDecoratedSubInstance.__timestamp__ : ', myDecoratedSubInstance.__timestamp__);

	debugger;

}, 1000);

