
function Factory1997(previous) {
	function MyConstructor(state) {
		this.state = state;
	};
	MyConstructor.prototype = previous;
	// 1997th way to build up this factory
	MyConstructor.prototype.constructor = MyConstructor;
	return MyConstructor;
};

var initial = { state: 1 };
var Constructor_1 = Factory1997(initial);
var next1 = new Constructor_1(2);
var Constructor_2 = Factory1997(next1);
var next2 = new Constructor_2(3);

debugger; 

console.log(next2 instanceof Constructor_1);

debugger; 



function FactoryToday(previous) {
	function MyConstructor(state) {
		this.state = state;
	};
	Object.setPrototypeOf(MyConstructor.prototype, previous);
	// 1997th way to build up this factory
	MyConstructor.prototype.constructor = MyConstructor;
	return MyConstructor;
};

const first = { state: 1 };
const Second = FactoryToday(first);
const second = new Second(2);
const Third = FactoryToday(second);
const third = new Third(3);

debugger; 

console.log(third instanceof Third);

debugger; 