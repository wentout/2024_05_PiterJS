'use strict';
(() => {

	debugger;

	const MAX_NUM = 1000;
	const global = {};

	global.m = [];

	global.start = Date.now();

	global.current = {
		name: 'root'
	};

	const review = () => {
		console.log('finished', global.m.length, (Date.now() - global.start) / 1000);
		
		debugger;
		
		console.time("time");
		
		console.log('global.current:', global.current.idx_0);
		
		console.timeEnd("time");
		
		debugger;
	};

	const makeNextEl = function (pointer) {
		const name = `idx_${global.m.length}`;
		const el = {
			get [name]() {
				return el;
			},
			name,
			parent: pointer,
			get self() {
				return el;
			}
		};
		Object.setPrototypeOf(el, pointer);
		global.current = el;
		global.m.push(el);
		if (global.m.length < MAX_NUM) {
			console.log(global.m.length, name, (Date.now() - global.start) / 1000);
			
			// get rid of stack overflow
			requestAnimationFrame(() => {
				makeNextEl(el);
			}, 0);
			return;
		}
		review();
	};

	debugger;
	makeNextEl(global.current);


})();
