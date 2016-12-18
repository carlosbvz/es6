'use strict'

// 	Used as spread operator
function foo(x, y, z) {
	console.log(x , y , z);
}
foo(...[1,2,3])

// Used as concat
let a = [2,3]
let b = [1, ...a, 4]
console.log(b)

// Used as gather (usually called 'rest parameters')
function bar(x, y, ...z) {
	console.log(x, y, z)
}
bar(1,2,3,4,5)

function baz(...args) {
	console.log(args)
}
baz(1,2,3,4,5)

// New es6 way
function jazz(...args) {
	args.shift()
	args.pop()
	console.log(...args)
	let argsArray = args
	console.log(argsArray)
}
jazz(0,1,2,3,4)
