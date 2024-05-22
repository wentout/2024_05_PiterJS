function FactoryOfFactories(previous) {
	
	// 1997th way to build up this factory of Factories
	function Factory(state) {
		this.state = state;
	};
	Factory.prototype = previous;
	
	function MyConstructor(state) {
		this.state = state;
	};
	
	MyConstructor.prototype = new Factory();
	MyConstructor.prototype.constructor = MyConstructor;
	
	return MyConstructor;
};

debugger;

var initial = { state: 1 };
var MyConstructor = FactoryOfFactories(initial);
var instance = new MyConstructor(2);

debugger;

console.log(instance instanceof MyConstructor);

debugger;
