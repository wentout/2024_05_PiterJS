
// prototype property introspection
// the difference between
debugger;

class TheClass {};

debugger;

const instance = new TheClass;

debugger;
// class
console.log(Object.getOwnPropertyDescriptor(TheClass, 'prototype'));

debugger;
// function
console.log(Object.getOwnPropertyDescriptor(function () {}, 'prototype'));

debugger;
// async function
console.log('async : ', Object.getOwnPropertyDescriptor(async function () {}, 'prototype'));

debugger;
// & arrow function
console.log('arrow : ', Object.getOwnPropertyDescriptor(() => {}, 'prototype'));

debugger;

