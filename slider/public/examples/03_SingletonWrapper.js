
const SingletonWrapper = function () { };

SingletonWrapper.prototype = Object.create(window.$);

SingletonWrapper.prototype.constructor = SingletonWrapper;

const instance = new SingletonWrapper;

debugger;

console.log(instance);

debugger;

console.log(typeof instance.isReady);

debugger;
