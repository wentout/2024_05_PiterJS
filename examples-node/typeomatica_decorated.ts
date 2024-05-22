import { Strict } from 'typeomatica';

debugger;

@Strict()
class BaseClass { }
class StrictlyTyped extends BaseClass {
	numberValue: number;
	stringValue: string;
	booleanValue: boolean;
	nullValue: null;
	undefinedValue: undefined;
	symbolValue: symbol;
	bigIntValue: bigint;
	objectValue: object;
	constructor() {

		super();

		console.log('constructor invocation');
		debugger;

		this.numberValue = 123;
		this.stringValue = '123';
		this.booleanValue = true;

		this.nullValue = null;
		this.undefinedValue = undefined;

		this.symbolValue = Symbol('an example');
		this.bigIntValue = BigInt(0);

		this.objectValue = {};

	}
}

console.log('instance creation');

debugger;
// use F11 to jump in
const instance = new StrictlyTyped();

debugger;

console.log('instance instanceof StrictlyTyped: ', instance instanceof StrictlyTyped)

debugger;
try {
	instance.numberValue = 321;

	debugger;
	//@ts-expect-error
	instance.numberValue = 'string';
	console.log('never seen');
} catch (error) {
	debugger;
	console.log(error);
}

debugger;
try {
	instance.stringValue = 'some string';

	debugger;
	//@ts-expect-error
	instance.stringValue = 123;
	console.log('never seen');
} catch (error) {
	debugger;
	console.log(error);
}

debugger;
try {
	instance.booleanValue = true;

	debugger;
	//@ts-expect-error
	instance.booleanValue = 123;
	console.log('never seen');
} catch (error) {
	debugger;
	console.log(error);
}

debugger;
try {
	instance.nullValue = null;

	debugger;
	//@ts-expect-error
	instance.nullValue = undefined;
	console.log('never seen');
} catch (error) {
	debugger;
	console.log(error);
}

debugger;
try {
	instance.undefinedValue = undefined;

	debugger;
	//@ts-expect-error
	instance.undefinedValue = null;
	console.log('never seen');
} catch (error) {
	debugger;
	console.log(error);
}

debugger;
try {
	instance.symbolValue = Symbol('other symbol');

	debugger;
	//@ts-expect-error
	instance.symbolValue = 'some string';
	console.log('never seen');
} catch (error) {
	debugger;
	console.log(error);
}

debugger;
try {
	instance.bigIntValue = BigInt(123);

	debugger;
	//@ts-expect-error
	instance.bigIntValue = 'some string';
	console.log('never seen');
} catch (error) {
	debugger;
	console.log(error);
}

debugger;
try {
	instance.objectValue = {
		someField: 123
	};

	debugger;
	//@ts-expect-error
	instance.objectValue = 'some string';
	console.log('never seen');
} catch (error) {
	debugger;
	console.log(error);
}

debugger;